class StorageActor {

    initialize(selfActor) {
        this.logger = selfActor.getLog()
        this.mailBox = []
        this.timer = setInterval(this.onCheck.bind(this), 500)
    }

    store(message) {
        this.mailBox.push(message)
        return `OK[${process.pid}] ${message}`
    }

    onCheck() {
        if (this.mailBox.length > 0) {
            this.doWork()
        }
    }

    doWork() {
       let msg = this.mailBox.shift()
       if (msg) {
            let waitTill = new Date(new Date().getTime() + 5 * 1000)
             while(waitTill > new Date()){}
             this.logger.info(`consume ${msg}`);
       }
    }

    destroy() {
        clearInterval(this.timer)
        this.logger.info(`fail to store: ${this.mailBox}`);
    }
}

export default StorageActor