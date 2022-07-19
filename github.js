class Github {
    constructor() {
        this.client_id = '0d4e7deda5351d3edc1a';
        this.client_secret = 'c5fa0224f75f5d94150cf7c8a122228b1c1d8e28';
        this.repos_count = 5;
        this.repos_sort = "created: asc";
    }

    async getUser(user){
        const profileRespond = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`) ;
        const repoRespond = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`) ;
      
        const profile = await profileRespond.json();
        const repos = await repoRespond.json();
        return {
            profile,
            repos
        }
    }
}