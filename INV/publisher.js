class PubSubClass {
  constructor() {
    this.topics = [];
    this.subscribers = {};
  }

  createTopic(topicId) {
    this.topics.push(topicId);
  }

  subscribe(topicId, callback) {
    if (!this.subscribers[topicId]) {
      this.subscribers[topicId] = [callback];
    } else {
      this.subscribers[topicId] = [...this.subscribers[topicId], callback];
    }
  }

  publish(topicId, data) {
    this.subscribers[topicId].map((subCallBack) => subCallBack(data));
  }

  unsubscribe(topicId, callback) {
    this.subscribers[topicId] = this.subscribers[topicId].filter(
      (cb) => cb !== callback
    );
  }
}

class Sub1 {
  callback(data) {
    console.log("Sub1 ", data);
  }
}

class Sub2 {
  callback(data) {
    console.log("Sub 2", data);
  }
}

const pubsub = new PubSubClass();
pubsub.createTopic(1);
pubsub.createTopic(2);
pubsub.createTopic(3);
pubsub.createTopic(4);

const sub2Callback = new Sub2().callback;
const sub1Callback = new Sub1().callback;
pubsub.subscribe(1, sub1Callback);
pubsub.subscribe(1, sub2Callback);
pubsub.subscribe(2, sub2Callback);

pubsub.publish(1, `New Data arrived ${Date.now()}`);
pubsub.unsubscribe(2, sub2Callback);
pubsub.publish(2, `New Data arrived ${Date.now()}`);
