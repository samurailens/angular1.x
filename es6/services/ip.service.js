export default class IpService{

    constructor($http) {
        this.$http = $http;
       
    }

    myIp() {
        return this.$http.get("https://api.ipify.org?format=json");
    }
}