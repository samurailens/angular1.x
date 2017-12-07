export default class LocationService {
    constructor($location) {
        this.$location = $location;
    }

    getPath() {
        return this.$location.path();
    }
}