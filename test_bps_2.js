const fs = require('fs');
async function test() {
  const url = 'https://webapi.bps.go.id/v1/api/list/model/data/domain/3513/subject/12/key/59270fb99676ccdaab5598a2c251db7f/';
  try {
    const res = await fetch(url);
    const text = await res.text();
    fs.writeFileSync('bps_data_12.json', text);
    console.log('Success');
  } catch(e) {
    console.error(e);
  }
}
test();
