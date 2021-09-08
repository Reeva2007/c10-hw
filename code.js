var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["b347505d-dff7-411e-935d-88614f55f8ff","fb802487-ea11-457e-96bd-8f65bd0bca57","64985090-bcf5-4eb8-b4b6-5e557f826659","757af8ee-a7af-4315-9d64-f2814b3f9d29","28b3cad2-2fd7-4e44-8c04-dcfe320ca1c0","69263694-5f1d-46b5-b598-42796b1ac945","1172a611-0cb3-4b48-aac7-7c4f9a1cc009","06781b73-241d-4d86-b129-6edee183a14d","2f35c0e3-f95b-4054-a883-24bdd709492b","9911305a-5952-43d7-a99d-055c2d32868a","32cfd118-0e7b-4725-89a1-66cd531e85dc","536700a6-7f9d-4aaf-b564-bc2c4963006e"],"propsByKey":{"b347505d-dff7-411e-935d-88614f55f8ff":{"name":"background_landscape09_1","categories":["backgrounds"],"frameCount":1,"frameSize":{"x":400,"y":399},"looping":true,"frameDelay":2,"jsonLastModified":"2021-01-05 18:38:51 UTC","pngLastModified":"2021-01-05 18:39:50 UTC","version":"T167cO7veEolJu4MdK3thTgLhnqD_rJB","sourceUrl":"assets/api/v1/animation-library/gamelab/T167cO7veEolJu4MdK3thTgLhnqD_rJB/category_backgrounds/background_landscape09.png","sourceSize":{"x":400,"y":399},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/T167cO7veEolJu4MdK3thTgLhnqD_rJB/category_backgrounds/background_landscape09.png"},"fb802487-ea11-457e-96bd-8f65bd0bca57":{"name":"monster_10_1","categories":["fantasy"],"frameCount":1,"frameSize":{"x":151,"y":323},"looping":true,"frameDelay":10,"jsonLastModified":"2021-01-05 19:08:11 UTC","pngLastModified":"2021-01-05 19:07:13 UTC","version":"T4AU37KxMaATY4BRWEFSCdd0lBKatf2L","sourceUrl":"assets/api/v1/animation-library/gamelab/T4AU37KxMaATY4BRWEFSCdd0lBKatf2L/category_fantasy/monster_10.png","sourceSize":{"x":151,"y":323},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/T4AU37KxMaATY4BRWEFSCdd0lBKatf2L/category_fantasy/monster_10.png"},"64985090-bcf5-4eb8-b4b6-5e557f826659":{"name":"castle_11_1","categories":["buildings"],"frameCount":1,"frameSize":{"x":280,"y":389},"looping":true,"frameDelay":2,"jsonLastModified":"2021-01-05 18:48:49 UTC","pngLastModified":"2021-01-05 18:47:55 UTC","version":"Ryc6Dr3nkaPa5pq9BUhbLYkdD5K.8Amh","sourceUrl":"assets/api/v1/animation-library/gamelab/Ryc6Dr3nkaPa5pq9BUhbLYkdD5K.8Amh/category_buildings/castle_11.png","sourceSize":{"x":280,"y":389},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/Ryc6Dr3nkaPa5pq9BUhbLYkdD5K.8Amh/category_buildings/castle_11.png"},"757af8ee-a7af-4315-9d64-f2814b3f9d29":{"name":"green_dress_hands_behind_1","categories":["people"],"frameCount":1,"frameSize":{"x":139,"y":398},"looping":true,"frameDelay":2,"jsonLastModified":"2021-01-15 21:44:33 UTC","pngLastModified":"2021-01-15 21:44:33 UTC","version":"LZK6kj_JW76axb1R3vifPsP4X4YmECy0","sourceUrl":"assets/api/v1/animation-library/gamelab/LZK6kj_JW76axb1R3vifPsP4X4YmECy0/category_people/green_dress_hands_behind.png","sourceSize":{"x":139,"y":398},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/LZK6kj_JW76axb1R3vifPsP4X4YmECy0/category_people/green_dress_hands_behind.png"},"28b3cad2-2fd7-4e44-8c04-dcfe320ca1c0":{"name":"blue_hoodie_backpack_1","categories":["people"],"frameCount":1,"frameSize":{"x":119,"y":383},"looping":true,"frameDelay":2,"jsonLastModified":"2021-01-15 21:45:01 UTC","pngLastModified":"2021-01-15 21:45:02 UTC","version":"zPUFCzpi9NNCKu799uw5h7NO1Y13PEFP","sourceUrl":"assets/api/v1/animation-library/gamelab/zPUFCzpi9NNCKu799uw5h7NO1Y13PEFP/category_people/blue_hoodie_backpack.png","sourceSize":{"x":119,"y":383},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/zPUFCzpi9NNCKu799uw5h7NO1Y13PEFP/category_people/blue_hoodie_backpack.png"},"69263694-5f1d-46b5-b598-42796b1ac945":{"name":"blue_sweater_wave_1","categories":["people"],"frameCount":1,"frameSize":{"x":157,"y":400},"looping":true,"frameDelay":2,"jsonLastModified":"2021-01-19 17:30:56 UTC","pngLastModified":"2021-01-19 17:30:55 UTC","version":"MTug7vtxj.uJvmWAl1NUZ9w_O0QG.DpZ","sourceUrl":"assets/api/v1/animation-library/gamelab/MTug7vtxj.uJvmWAl1NUZ9w_O0QG.DpZ/category_people/blue_sweater_wave.png","sourceSize":{"x":157,"y":400},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/MTug7vtxj.uJvmWAl1NUZ9w_O0QG.DpZ/category_people/blue_sweater_wave.png"},"1172a611-0cb3-4b48-aac7-7c4f9a1cc009":{"name":"pink_kimono_hands_in_front_1","categories":["people"],"frameCount":1,"frameSize":{"x":104,"y":400},"looping":true,"frameDelay":2,"jsonLastModified":"2021-01-15 21:44:07 UTC","pngLastModified":"2021-01-15 21:44:07 UTC","version":"TS91anE7a_W8D548v2s5zBwC7Arr0DLE","sourceUrl":"assets/api/v1/animation-library/gamelab/TS91anE7a_W8D548v2s5zBwC7Arr0DLE/category_people/pink_kimono_hands_in_front.png","sourceSize":{"x":104,"y":400},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/TS91anE7a_W8D548v2s5zBwC7Arr0DLE/category_people/pink_kimono_hands_in_front.png"},"06781b73-241d-4d86-b129-6edee183a14d":{"name":"grey_shirt_1","categories":["people"],"frameCount":1,"frameSize":{"x":140,"y":400},"looping":true,"frameDelay":2,"jsonLastModified":"2021-01-15 21:44:22 UTC","pngLastModified":"2021-01-15 21:44:23 UTC","version":"eoR5XqQ6eXDq5XA6ewkRvs.PAbyb9ISQ","sourceUrl":"assets/api/v1/animation-library/gamelab/eoR5XqQ6eXDq5XA6ewkRvs.PAbyb9ISQ/category_people/grey_shirt.png","sourceSize":{"x":140,"y":400},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/eoR5XqQ6eXDq5XA6ewkRvs.PAbyb9ISQ/category_people/grey_shirt.png"},"2f35c0e3-f95b-4054-a883-24bdd709492b":{"name":"orange_shirt_wave_1","categories":["people"],"frameCount":1,"frameSize":{"x":159,"y":399},"looping":true,"frameDelay":2,"jsonLastModified":"2021-01-15 21:44:24 UTC","pngLastModified":"2021-01-15 21:44:25 UTC","version":"H7a4Mns7On_g5KDbc9wJ1MxrlZb7kO6C","sourceUrl":"assets/api/v1/animation-library/gamelab/H7a4Mns7On_g5KDbc9wJ1MxrlZb7kO6C/category_people/orange_shirt_wave.png","sourceSize":{"x":159,"y":399},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/H7a4Mns7On_g5KDbc9wJ1MxrlZb7kO6C/category_people/orange_shirt_wave.png"},"9911305a-5952-43d7-a99d-055c2d32868a":{"name":"purple_shirt_hands_in_pockets_1","categories":["people"],"frameCount":1,"frameSize":{"x":119,"y":384},"looping":true,"frameDelay":2,"jsonLastModified":"2021-01-15 21:43:54 UTC","pngLastModified":"2021-01-15 21:43:54 UTC","version":"7m7HQa80BcUYC8PEcNj1NVxWG_MTFmes","sourceUrl":"assets/api/v1/animation-library/gamelab/7m7HQa80BcUYC8PEcNj1NVxWG_MTFmes/category_people/purple_shirt_hands_in_pockets.png","sourceSize":{"x":119,"y":384},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/7m7HQa80BcUYC8PEcNj1NVxWG_MTFmes/category_people/purple_shirt_hands_in_pockets.png"},"32cfd118-0e7b-4725-89a1-66cd531e85dc":{"name":"alien_01_1","categories":["fantasy"],"frameCount":1,"frameSize":{"x":365,"y":400},"looping":true,"frameDelay":2,"jsonLastModified":"2021-01-05 19:06:26 UTC","pngLastModified":"2021-01-05 19:07:34 UTC","version":"nVBK1OnWogFitvGAbWs4ey1tFRWCwaVl","sourceUrl":"assets/api/v1/animation-library/gamelab/nVBK1OnWogFitvGAbWs4ey1tFRWCwaVl/category_fantasy/alien_01.png","sourceSize":{"x":365,"y":400},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/nVBK1OnWogFitvGAbWs4ey1tFRWCwaVl/category_fantasy/alien_01.png"},"536700a6-7f9d-4aaf-b564-bc2c4963006e":{"name":"rainbow_1","categories":["backgrounds"],"frameCount":1,"frameSize":{"x":400,"y":400},"looping":true,"frameDelay":2,"jsonLastModified":"2021-01-05 18:38:03 UTC","pngLastModified":"2021-01-07 19:26:51 UTC","version":"2JbYx3k.w.ZsY_IjFwTPssGZWs1Pv25.","sourceUrl":"assets/api/v1/animation-library/gamelab/2JbYx3k.w.ZsY_IjFwTPssGZWs1Pv25./category_backgrounds/background_rainbow.png","sourceSize":{"x":400,"y":400},"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/api/v1/animation-library/gamelab/2JbYx3k.w.ZsY_IjFwTPssGZWs1Pv25./category_backgrounds/background_rainbow.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var background = createSprite(200, 200,400,400);
background.setAnimation("background_landscape09_1")
var ghost = createSprite(50,355,20,20);
ghost.setAnimation("alien_01_1")
ghost.scale=0.20
var target = createSprite(355, 35,20,20);
target.setAnimation("castle_11_1");
target.scale=0.2
var barrier = createSprite(70, 290,140,10);
barrier.shapeColor="black"
var barrier2 = createSprite(69,93,10,179);
var barrier3 = createSprite(320, 200,180,10);
barrier3.shapeColor="black"
barrier2.shapeColor="black"


var human1 = createSprite(14,98,20,20);
human1.setAnimation("green_dress_hands_behind_1");
human1.scale=0.15
human1.velocityX=-1
human1.velocityY=1
var human2 = createSprite(380,150,20,20);
human2.setAnimation("blue_hoodie_backpack_1");
human2.scale=0.15
human2.velocityX=-1
human2.velocityY=1
var human3 = createSprite(14,186,20,20);
human3.setAnimation("blue_sweater_wave_1");
human3.scale=0.15
human3.velocityY=-2
human3.velocityX=1
var human4 = createSprite(380,218,20,20);
human4.setAnimation("pink_kimono_hands_in_front_1");
human4.scale=0.15
human4.velocityY=-2
human4.velocityY=1
var human5 = createSprite(14,258,20,20);
human5.setAnimation("grey_shirt_1");
human5.scale=0.15
human5.velocityX=-1
human5.velocityY=1
var human6 = createSprite(380,290,20,20);
human6.setAnimation("purple_shirt_hands_in_pockets_1");
human6.scale=0.15
human6.velocityX=-1
human6.velocityY=1

function draw() {
  
  createEdgeSprites()
  human1.bounceOff(edges)
   human2.bounceOff(edges)
    human3.bounceOff(edges)
     human4.bounceOff(edges)
      human5.bounceOff(edges)
       human6.bounceOff(edges)
       
       human1.bounceOff(barrier)
        human1.bounceOff(barrier2)
         human1.bounceOff(barrier3)
         
          human2.bounceOff(barrier)
            human2.bounceOff(barrier2)
              human2.bounceOff(barrier3)
              
  human3.bounceOff(barrier) 
   human3.bounceOff(barrier2)
    human3.bounceOff(barrier3)   
    
     human4.bounceOff(barrier)
      human4.bounceOff(barrier2)
       human4.bounceOff(barrier3)
       
    human5.bounceOff(barrier)
      human5.bounceOff(barrier2)
        human5.bounceOff(barrier3)
        
  human6.bounceOff(barrier)
   human6.bounceOff(barrier2)
    human6.bounceOff(barrier3)
    
    human1.bounceOff(target)
        human2.bounceOff(target)
            human3.bounceOff(target)
                human4.bounceOff(target)
          human5.bounceOff(target)
              human6.bounceOff(target)
   if(keyDown("left")){
     ghost.x=ghost.x-3
   }
   if(keyDown("right")){
     ghost.x=ghost.x+3
   }
   if(keyDown("up")){
     ghost.y=ghost.y-3
   }
  if(keyDown("down")){
     ghost.y=ghost.y+3
   }
   ghost.bounceOff(barrier) 
    ghost.bounceOff(barrier2)
     ghost.bounceOff(barrier3)
      ghost.bounceOff(edges)
      
      if(ghost.isTouching(human1)){
        ghost.x=50
        ghost.y=355
      }
       
      if(ghost.isTouching(human2)){
        ghost.x=50
        ghost.y=355
      }
 
      if(ghost.isTouching(human3)){
        ghost.x=50
        ghost.y=355
      }
       
      if(ghost.isTouching(human4)){
        ghost.x=50
        ghost.y=355
      }
       
      if(ghost.isTouching(human5)){
        ghost.x=50
        ghost.y=355
      }
       
      if(ghost.isTouching(human6)){
        ghost.x=50
        ghost.y=355
      }
   
  drawSprites()
  textFont("Georgia");
  
  fill("yellow")
      text("START",40,305)
    text("WINNER", 330, 85);
    
   if (ghost.isTouching(target)) {
     background.setAnimation("rainbow_1")
     fill("black")
     textSize(23);
 textFont("Georgia");
     text("CASTLE IS YOURS",200,120)
    }
     
        
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
