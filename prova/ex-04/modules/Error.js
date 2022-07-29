export default class Error {
    status;
    info;

    setStatus(value) {
        this.status = value;
        return true;
    }

    setInfo(value) {
        this.info = value;
        return true;
    }

    getObject() {
        return {
            status: this.status,
            inf0: this.info,
        };
    }
}
