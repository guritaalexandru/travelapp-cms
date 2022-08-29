module.exports = ({ env }) => ({
    upload: {
      config: {
        provider: 'aws-s3',
        providerOptions: {
          accessKeyId: env('IAM_USER_ACCESS_KEY'),
          secretAccessKey: env('IAM_USER_SECRET_KEY'),
          region: env('S3_BUCKET_REGION'),
          params: {
              Bucket: env('S3_BUCKET_NAME'),
          },
        },
        // These parameters could solve issues with ACL public-read access — see [this issue](https://github.com/strapi/strapi/issues/5868) for details
        actionOptions: {
          upload: {
            ACL: null
          },
          uploadStream: {
            ACL: null
          },
        }
      },
    }
  });