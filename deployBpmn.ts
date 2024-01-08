const { ZBClient } = require('zeebe-node');
const fsp = require('fs/promises');
const { exec } = require('child_process');
const path = require('path');

async function autoUpdateVersion() {
  // 读取 package.json 文件
  const PKG_PATH = path.resolve(__dirname, 'bpmn');
  try {
    const bpmnList = await fsp.readdir(PKG_PATH);

    const zbc = new ZBClient({
      camundaCloud: {
        clusterId: '5dd62ac5-633c-4cb0-aaf4-dc82cbbe3c24',
        clientId: 'viLveu6AUfNHQAkw~7CDg-pJbqkW-BKu',
        clientSecret:
          'SNgpsxiN7yvs0TWy_1ATsGcih1tAdCEATYNdVww0eBspKDVoRynTVHbnqfE6M9Oc',
      },
      onReady: () => console.log(`Connected!`),
      onConnectionError: () => console.log(`Disconnected!`),
    });
    console.log(bpmnList);

    bpmnList.forEach(async (file) => {
      console.log(file);

      const filePath = path.join(PKG_PATH, file);
      const data = await fsp.readFile(filePath, 'utf8');
      console.log(data);

      zbc.deployProcess({
        definition: data,
        name: file,
      });
    });
  } catch (error) {
    console.error(error);
    throw error;
  }
}
autoUpdateVersion();
