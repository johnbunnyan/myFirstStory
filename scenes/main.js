const player = add([
  sprite('player'),
  scale(0.5),
pos(20,20),
body()
])

const MOVE_SPEED = 120
keyDown('right', ()=>{
  player.move(MOVE_SPEED,0)
})

keyDown('left', ()=>{
  player.move(-MOVE_SPEED,0)
})

keyDown('space', ()=>{
 if(player.grounded()){
   player.jump(player.jumpForce*0.7)
 }
})

layers([
		"bg",
		"obj",
		"ui",
	], "obj");


add([
		sprite("sky"),
		scale(width()/20, height()/50),
		layer("bg"),
	]);


addLevel([
  '   @ ',
  '  #  ',
  '     ',
  'xxxxxxxxxxx',
], {
  width:30,
  height:47,
  '#':[sprite('dog'),body(),scale(0.5)],
  'x':[sprite('ground'),solid()],
  '@':[sprite('enemy'), scale(0.5),body(),'dangerous']
})

player.collides('dangerous',()=>{
destroy(player)
})