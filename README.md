# WebDevStuff

Link:
<ol>
  <li><h2>Understand the working of js</h2></li>
  http://latentflip.com/loupe/
  <li>Diff Algoritm</li>
  <li>Reconciler</li>
  <li>Batching in react</li>
    Automatic batching algorithm
![image](https://github.com/mukeshmaurya23/WebDevStuff/assets/77536282/bbce1e6b-d988-437b-b8c4-961be2c4469a)
<p>
  Here in this instaed of do updateViryualDom() and then just below it createDom()
  then it in 1milisecond vDOM is updating and also real dom this is not the optimize way if things happen quickly
  React uses automatic batching algorithm to batches the state  update instead of calling createDOM() in 1milisecond
  call VDom() in 1 miliseconds and after the 10 sec createDom()
</p>

</ol>


