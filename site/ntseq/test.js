var Nt = require('ntseq');
// Create and put data into a new nucleotide sequence
var seqA = new Nt.Seq();
seqA.read('ATGC');

// Create an RNA sequence - identical to DNA, but RNA will output 'U' instead of 'T'
var seq = new Nt.Seq('RNA');
seq.read('ATGCATGC');

// Create a MatchMap of seqA aligned against seqB.
var map = new Nt.MatchMap(seqA, seq);

// Additionally, this line is equivalent to the previous
var map = seq.mapSequence(seqA);
var repeatedSeq = seq.repeat(3);

// Logs 'AATT'
console.log(seq.sequence());
// Logs 'AATTAATTAATT'
console.log(repeatedSeq.sequence());

// Can shorten to one line...
var gcSeq = (new Nt.Seq()).read('GCGC');

var insertedSeq = repeatedSeq.insertion(gcSeq, 4);

// Logs 'AATTGCGCAATTAATT'
console.log(insertedSeq.sequence());
