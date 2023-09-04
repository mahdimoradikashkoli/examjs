const express = require('express');
   const app = express();

   app.use(express.static('dist'));

   app.listen(3000, () => {
     console.log('سرور در حال اجرا است در http://localhost:3000');
   });