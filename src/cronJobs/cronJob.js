import cron from 'node-cron';

const cronJob = (time, job) => {
  cron.schedule(time, job, {
    scheduled: true,
    timezone: 'Asia/Singapore',
  });
};

export default {
  cronJob,
};
