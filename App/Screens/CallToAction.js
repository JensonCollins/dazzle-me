App.CallToAction = new Screen({

	Name: "CallToAction",

	Containers: [
		{ 	name: 'RootContainer', alpha:0,
			scaleStrategyPortrait: ['fit-to-screen', 1280, 720],
			scaleStrategyLandscape: ['fit-to-screen', 1280, 720], childs:[
			{   name: 'BackgroundContainer',
				childs: [
					{   name: 'background container wrapper',
						childs: [
							{   name: 'intro background',
								type: 'sprite',
								image: 'intro_background'
							},
							{	name: 'intro text1',
								type: 'text',                                
								text: 'WIN UP TO 152 000 COINS',
								anchor: [0.5, 0],
								position: [0, -205],
								styles: {   
									fontFamily: 'Arial', fontSize: '70px', fontWeight: '700', padding: 0,
									fill: 0xfae400,
									stroke: 0xff6e00,
									strokeThickness: 8,
									dropShadow: true,
									dropShadowAlpha: 1,
									dropShadowBlur: 5,
									dropShadowColor: 0x7f4315,
									dropShadowDistance: 3,
									letterSpacing: -6
								}
							}
						]
					},
					{	name: 'intro page 1',
						type: 'sprite',
						position: [100, 0],
						childs: [
							{   name: 'intro mark',
								type: 'sprite',
								image: 'intro_mark_1',
								position: [-400, 60],
							},
							{	name: 'intro text2',
								type: 'text',                                
								text: 'LINKED REELS',
								position: [30, -70],
								anchor: [0.5, 0],
								styles: {   
									fontFamily: 'Arial', fontSize: '45px', fontWeight:'900',padding: 20,
									fill: 0x0061d2,
									stroke: 0xffffff,
									strokeThickness: 3,
									dropShadow: true,
									dropShadowAlpha: 1,
									dropShadowBlur: 10,
									dropShadowColor: 0xffffff,
									dropShadowDistance: 5,
									letterSpacing: -2
								}
							},
							{	name: 'intro text3',
								type: 'text',                                
								text: ' Each spin during Free Spins \n has Linked Reels ',
								position: [80, 25],
								anchor: [0.5, 0],
								styles: {   
									fontFamily: 'Arial', fontSize: '35px', padding: 20,
									fill: 0x0061d2,
									stroke: 0xffffff,
									strokeThickness: 3,
									dropShadow: true,
									dropShadowAlpha: 1,
									dropShadowBlur: 10,
									dropShadowColor: 0xffffff,
									dropShadowDistance: 5,
									letterSpacing: 0
								}
							},
						]
					},
					{	name: 'intro page 2',
						type: 'sprite',
						position: [100 + 1280, 0],
						childs: [
							{   name: 'intro mark',
								type: 'sprite',
								image: 'intro_mark_2',
								position: [-400, 60],
							},
							{	name: 'intro text2',
								type: 'text',                                
								text: 'DAZZLING WILD REELS',
								position: [180, -70],
								anchor: [0.5, 0],
								styles: {   
									fontFamily: 'Arial', fontSize: '45px', fontWeight:'900', padding: 20,
									fill: 0x0061d2,
									stroke: 0xffffff,
									strokeThickness: 6,
									dropShadow: true,
									dropShadowAlpha: 1,
									dropShadowBlur: 10,
									dropShadowColor: 0xffffff,
									dropShadowDistance: 2,
									letterSpacing: -2
								}
							},
							{	name: 'intro text3',
								type: 'text',                                
								text: ' Up to five reels can \n turn into Dazzling Wild \n Reels. ',
								position: [80, 25],
								anchor: [0.5, 0],
								styles: {   
									fontFamily: 'Arial', fontSize: '35px', padding: 20,
									fill: 0x0061d2,
									stroke: 0xffffff,
									strokeThickness: 3,
									dropShadow: true,
									dropShadowAlpha: 1,
									dropShadowBlur: 10,
									dropShadowColor: 0xffffff,
									dropShadowDistance: 5,
									letterSpacing: 0
								}
							},
							{	name: 'Dazzing Animation wrapper',
								type: 'sprite',
								position: [400, 100]
							}
						]
					}
				]
			},
			{   name: 'ControPanelContainer',
				childs: [
					{
						name: 'controlpanel container wrapper',
						childs: [
							{	name: 'button wrapper',
								type: 'sprite',
								position: [450,300],
								childs: [
									{   name: 'button continue',
										type: 'sprite',
										image: 'btn_normal',
										scale: [1,1], button:'continue'
									},
									{	name: 'button continue text',
										type: 'text',
										text: 'CONTINUE',
										anchor: [0.5, 0.5],
										styles: {   
											fontFamily: 'Arial', fontSize: '40px', padding: 0,
											fill: 0xeeeeee,
											stroke: 0x6bac00,
											strokeThickness: 3,
											dropShadow: true,
											dropShadowAlpha: 1,
											dropShadowBlur: 5,
											dropShadowColor: 0x6bac00,
											dropShadowDistance: 3,
											letterSpacing: -1
										}
									}
								]							
							},
							{	name: 'check on',
								type: 'sprite',
								position: [-610,310],
								image:'check_on', 
								alpha: 0,
								button: 'dont show check'					
							},
							{	name: 'do not show text',
								type: 'text',
								text: 'Don\'t show next time',
								anchor: [0.5, 0.5],
								position: [-470,308], event: 'dont show check',
								styles: {   
									fontFamily: 'Arial', fontSize: '20px', padding: 0,
									fill: 0x381b6b,
									stroke: 0x381b6b,
									strokeThickness: 3,
									dropShadow: true,
									dropShadowAlpha: 1,
									dropShadowBlur: 2,
									dropShadowColor: 0x381b6b,
									dropShadowDistance: 1,
									letterSpacing: 2
								}
							},
							{	name: 'slider pointer',
								type: 'sprite',
								position: [-6,270],//[25,270]
								image:'slider_pointer'						
							},						
						]
					}
				]
			},
		]}
	],

	Events: {

		'CallToAction before build': function() {

			this.updateChildParamsByName(Settings[this.Name]);

		},

		'CallToAction build': function() {

			this.SLIDER_POINTER_POS = [[-6,270], [25,270]];
			this.PAGE_ANIM_DELAY = 700;
			this.animationState = false;
			this.elaspedTime = 0;
			this.pageNum = 0;

			let dazzlinAniFrames = [];
			for (let k = 0; k < 29; k++) { dazzlinAniFrames.push('dazzlingAni' + ((k < 10) ? '-0' : '-') + k + '.png'); }
			this['Dazzing Animation wrapper'].removeChildren();
            this.buildChild(this['Dazzing Animation wrapper'], {
                name: 'dazzling animation', visible: true,
                type: 'movie-clip', frames: dazzlinAniFrames, speed: 0.3, loop: true
			});
			
			this['dazzling animation'].stop();
			this['dazzling animation'].gotoAndPlay(0);
		},

		'CallToAction showed': function () {
			this.tween({
				set:['alpha', 0],
				to: ['alpha', 1, 200, 0, Power1.easeOut]
			}, 'RootContainer');	
		},

		'CallToAction resize': function () {
			this['RootContainer'].alpha = 1;
		},

		'CalltoAction update': function() {
			this.elaspedTime += this.updateTimeOffset;
			this.pageNum += 1;
			if(this.elaspedTime > 4000) {
				this.elaspedTime = 0;
				let index = this.pageNum % 2;

				if(index) {
					
					this.tween({
						set:['position', [100, 0]],
						to: ['position', [-1290,0], this.PAGE_ANIM_DELAY, 0, Power1.easeOut]
					}, 'intro page 1');		
	
					this.tween({
						set:['position', [100 + 1280, 0]],
						to: ['position', [100,0], this.PAGE_ANIM_DELAY, 0, Power1.easeOut]
					}, 'intro page 2', () => {
						console.log("CalltoAction: elaspedTime: " + this.elaspedTime);
					});
				} else {
					this.tween({
						set:['position', [100, 0]],
						to: ['position', [-1290,0], this.PAGE_ANIM_DELAY, 0, Power1.easeOut]
					}, 'intro page 2');		
	
					this.tween({
						set:['position', [100 + 1280, 0]],
						to: ['position', [100,0], this.PAGE_ANIM_DELAY, 0, Power1.easeOut]
					}, 'intro page 1', () => {
						console.log("CalltoAction: elaspedTime: " + this.elaspedTime);
					});
				}
				setTimeout(() => {
					this['slider pointer'].position.x = this.SLIDER_POINTER_POS[index][0];
				}, this.PAGE_ANIM_DELAY);
				
			}
		},

		'CalltoAction continue down': function() {
			App.CallToAction.hide();
			App.Gameplay.show();
		},
		'CalltoAction dont show check down': function(container, e) {
				this['check on'].alpha = App.SHOW_INTRO? 1: 0;
				App.SHOW_INTRO = !App.SHOW_INTRO;
				console.log("isIntro ? " + App.SHOW_INTRO);
		}
	}
});
