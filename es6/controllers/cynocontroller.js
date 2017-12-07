export default class CynoController {

   
	constructor($scope, LocationService, IpService) {
        console.log('loading CynoController')
        this.email = 'email';
        this.password = 'password';
        this.myIp = 'unknown';

        this._IpService = IpService;
        $scope.password = 'somethingbig';

        console.log(LocationService.getPath());

        
	}

	submit(){
        //alert(this.email);
		//alert('submit');
    }


    getMyIp(){
        this.myIp = 'loading..'
          this._IpService.myIp().then(res => {
            console.log('res', res)

            if (res.status == 200) {
                this.myIp =res.data['ip'];
            }
        }, err => {
            this.myIp = err;
        }
    );
    }

	static getControllerTemplateName() {
		return 'controller';
    }
    

}
