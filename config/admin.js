module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '07d811314cf649ed35f3242c9581f3ed'),
  },
});
