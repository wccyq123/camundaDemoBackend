import * as kafka from 'kafka-node';
let kafkaConsumer!: kafka.Consumer;

// 获取kafka client
function getKafkaClient() {
  let kafkaClient!: kafka.KafkaClient;

  return () => {
    if (!kafkaClient) {
      kafkaClient = new kafka.KafkaClient({
        kafkaHost: 'localhost:9092',
      });
    }

    return kafkaClient;
  };
}

/**
 * @desc 获取消费者实例
 */
export function getKafkaConsumer(partition: 0 | 1) {
  const topics = [
    {
      topic: 'test',
      partition: partition,
      offset: 0,
    },
  ];

  const options = {
    autoCommit: true,
    autoCommitIntervalMs: 5000,
    fromOffset: false,
  };
  const kafkaClient = getKafkaClient()();

  if (!kafkaConsumer) {
    kafkaConsumer = new kafka.Consumer(kafkaClient, topics, options);
  }

  return kafkaConsumer;
}
