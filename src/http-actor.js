import app from './app'
import StorageActor from './actors/storage-actor'


class HttpActor {
     async initialize(selfActor) {
      this.log = selfActor.getLog()
      this.storage = await selfActor.createChild(StorageActor, { mode: 'forked',onCrash: "respawn" })
      app.storage = this.storage
      app.counter = 0
      app.listen(3600,()=>console.log(`Server is listening on port 3600`))
    }
}

export default HttpActor