const fs = require('fs');
const path = require('path');
const Client = require('ssh2-sftp-client');
const { execSync } = require('child_process');
// 定义本地文件夹路径和远程服务器路径
const localDirPath = path.join(__dirname, './dist');
const remoteDirPath = '/opt/ybzl/html/sales/wx';

// ===================== git ==================

// 获取命令行参数
const commitMessage = process.argv[2];
if (commitMessage) {
  execSync('git pull');

  // 添加所有文件
  execSync('git add .');

  // 提交文件
  execSync(`git commit -m "${commitMessage}"`);

  // 切换到指定分支
  // execSync(`git checkout ${branchName}`);

  // 推送到远程分支
  execSync('git push');

  console.log('Git push successful');
}

// ===================== git ==================

// 定义连接服务器的配置;
const config = {
  host: '192.168.66.81',
  port: 22,
  username: 'root',
  password: 'yb!23456'
};

// 创建SFTP客户端实例
const sftp = new Client();

// 连接远程服务器
sftp
  .connect(config)
  .then(() => {
    console.log('Connected to remote server');
    // 上传文件夹
    return sftp.uploadDir(localDirPath, remoteDirPath, {
      recursive: true // 使用递归上传模式
    });
  })
  .then(() => {
    console.log('Directory uploaded successfully');
    // 关闭SFTP客户端连接
    sftp.end();
  })
  .catch((err) => {
    console.error(err);
    // 关闭SFTP客户端连接
    sftp.end();
  });
