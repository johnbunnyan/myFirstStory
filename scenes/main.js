const player = add([
  sprite('player'),
  scale(0.5),
pos(20,20),
body()
])

const MOVE_SPEED = 200
keyDown('right', ()=>{
  player.move(MOVE_SPEED,0)
})

keyDown('left', ()=>{
  player.move(-MOVE_SPEED,0)
})


addLevel([
  '   @ ',
  '     ',
  '     ',
  'xxxxx',
], {
  width:30,
  height:48,
  'x':[sprite('ground'),solid()],
  '@':[sprite('anemy'), scale(0.5),body(),'dangerous']
})

player.collides('dangerous',()=>{
destroy(player)
})