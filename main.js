import ffmpeg from 'fluent-ffmpeg';

console.log("## Merging\n");
const cmd = ffmpeg();
cmd.addInput('./file1.mp3');
cmd.addInput('./file2.mp3');
cmd.
  mergeToFile('./merged.mp3').
  on('end', () => {
    console.log('finished: merged.mp3')
  }).
  on('error', (err) => {
    console.log("ERROR", err)
  })
