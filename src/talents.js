const agilityObj = {'Req50': [], 'Req45': [], 'Req40': [], 'Req35': [['Ghost', 'Legendary', 'Ministry Operative', 'Dodging a move will briefly make you invisible or until you attack.', '"+5 Passive Agility"', '35 Agility, Risky Moves']], 'Req30': [], 'Req25': [], 'Req20': [['Kick Off', 'Common', 'Acrobat', 'Your first wall jump will always send you higher than normal.', '+6 Passive Agility', 'Agility'], ['Steady Footing', 'Common', 'Acrobat', "You're much more resistant to being pushed around. ", '+9 Carry Load, +2 Passive Agility + 1 Health', 'Agility'], ['Quick Recovery', 'Common', 'Acrobat', 'You move faster after doing a wall jump.', '+1 Passive Agility', 'Agility'], ['Graceful Landing', 'Common', 'Acrobat', 'You easily brush off shorter falls, taking no fall damage.', '+1 Passive Agility', 'Agility'], ['Finesse', 'Common', 'Assassin', 'You pull your weapon out silently.', '+1 Passive Agility, +5 Health', 'Agility'], ['Vital Point', 'Common', 'Assassin', 'Assassinating someone gives you 50% PEN for 5 seconds', '+1 Passive Agility', 'Agility'], ['Lightspeed Reflexes', 'Rare', 'Assassin', 'Feinting gives a very brief auto-parry window.', '+1 Passive Agility', 'Agility'], ['Swift Rebound', 'Common', 'Butterfly', 'Move faster after successfully dodging an attack.', '+1 Passive Agility', 'Agility'], ['Observation', 'Rare', 'Butterfly', 'Dodge frames are larger if you cancel your roll immediately.', '+1 Passive Agility', 'Agility'], ['Risky Moves', 'Rare', 'Butterfly', "When you successfully dodge, you'll automatically dodge the next attack.", '+1 Passive Agility', 'Agility'], ['Steady Nerves', 'Common', 'Butterfly', 'You dance from toe to toe - successful dodges restore posture.', '+7 Carry Load, +2 Passive Agility, +2 Health', 'Agility'], ['Now You See Me', 'Common', 'Shade', 'Your stealth when crouching is increased.', '+1 Passive Agility, +2 Health', 'Agility'], ['Vanishing Follow-up', 'Legendary', 'Shade', 'Upon a successful flourish, teleport to the opponent when they stop moving. ', '', 'Agility'], ['Cap Artist', 'Common', 'Thief', "Pressing [R] while crouching allows you to fake being dead it's cancelled when hit or when toggling [R] again. ", '+4 Ether, +2 Passive Agility', 'Agility'], ['Master Thief', 'Common', 'Thief', 'Gain more notes when mugging a player. ', '+2 Ether', 'Agility, Pickpocket'], ["Another Man's Trash", 'Legendary', 'Thief', 'Take unequipped equipment when mugging a player.', '+3 Ether, +2 Passive Agility, +3 Health', 'Agility, Pickpocket'], ['Blade Dancer', 'Common', 'Vigil Swordsman', 'Landing a hit removes your roll cooldown.', '+1 Passive Agility', 'Agility'], ['Spinning Swordsman', 'Common', 'Vigil Swordsman', 'Running attacks do extra damage when you have a speed boost.', '+1 Passive Agility', 'Agility'], ['Bear Trap', 'Common', 'Vigil Swordsman', 'Landing a hit with your critical makes your opponent unable to jump for a duration. Also slows your opponent.', '+1 Passive Agility', 'Agility'], ['Speed Demon', 'Rare', 'Vigil Swordsman', 'Your attacks now inflict bleed while you have a speed boost. ', '+1 Passive Agility', 'Agility']], 'Req15': [], 'Req10': [['Scaredy Cat', 'Common', 'Alley Cat', 'When enemies initiate a fight first, you gain a speed boost.', '+2 Health, +2 Passive Agility', '10 Agility'], ['Lowstride', 'Common', 'Alley Cat', 'You suffer much less speed decrease from crouching.', '+1 Passive Agility', '10 Agility'], ['Conditioned Runner', 'Legendary', 'Alley Cat', 'You regenerate health faster than normal when running but less when not running.', '+1 Passive Agility', '10 Agility'], ['Endurance Runner', 'Common', 'Alley Cat', 'Even when things look dire, you still have it in you to keep your legs moving.', '+2 Health, +2 Passive Agility', '10 Agility'], ['Fast Blade', 'Common', 'Alley Cat', 'Extend the speedboost off parrying', '+1 Passive Agility', '10 Agility'], ['Evasive Expert', 'Rare', 'Alley Cat', 'Dodging grants a speedboost.', '+1 Passive Agility', '10 Agility']], 'Req5': []}
const charismaObj = {'Req50': [], 'Req45': [], 'Req40': [['Bodyguard Detail', 'Common', 'Public Figure', "If you're attacked in an allied territory, your allies will come rushing to your aid.", '+3 Ether, +2 Health', '40 Charisma']], 'Req35': [], 'Req30': [], 'Req25': [['Dazing Finisher', 'Legendary', 'Charm Caster', 'Flourishing enemies that are charmed by you cause them to not be knocked back and dazed instead.', '', '25 Charisma']], 'Req20': [['Lasting Charisma', 'Common', 'Charismatic Cast', 'Enemies charmed by your mantras are charmed longer.', '+4 Ether', 'Charisma, Charm, Charismatic Cast'], ['Chaotic Charm', 'Common', 'Charm Caster', ' When attacked at low health enemies deal less damage to you and more to anyone else.', '+4 Ether', 'Charisma'], ['Charismatic Cast', 'Common', 'Charm Caster', 'Landing mantras on enemies charms them reducing damage done to you.', '+ 4 Ether', 'Charisma'], ['Morale Booster', 'Common', 'Charm Caster', 'Allies recover twice as fast from being knocked when charmed by you.', '+ 4 Ether', 'Charisma'], ['Tough Love', 'Common', 'Charm Caster', 'Deal more damage to players charmed by you.', '+ 4 Ether', 'Charisma'], ['Familiar Sight', 'Common', 'Charm Caster', 'Being hit by someone of the same race causes them to be charmed for a short duration.', '', 'Charisma'], ['Give and Take', 'Common', 'Empath', 'Deal less damage to comrades and receive less damage from comrades.', '+3 Ether, + 2 Health', 'Charisma, Charm'], ['Celebrity', 'Common', 'Public Figure', 'Your reputation caps out higher.', '+2 Ether, +1 Health', 'Charisma'], ['Diplomat', 'Common', 'Public Figure', 'Your natural skill in mediating conflict makes people think more highly of you.', '+3 Ether, +3 Health', 'Charisma'], ['Friends in High Places', 'Common', 'Silvertongue', "Your connections often let you off the hook when you're in trouble with the law. Nepotism sure does pay!", '+4 Ether, +3 Health.', 'Charisma'], ['Salesperson', 'Common', 'Silvertongue', 'Vendors pay more for your sold items. Pretty sure they just pay extra to get you to leave them alone.', '+2 Ether. +2 Health.', 'Charisma'], ['Snake Oil', 'Common', 'Silvertongue', "Okay, the amount you're charging people for your items is getting downright criminal. But I'm just a Talent description, I can't stop you.", '+2 Ether. +1 Health.', 'Charisma'], ['Golden Tongue', 'Legendary', 'Silvertongue', 'Anyone who hears your voice will gain a temporary buff for a short period of time', '60 second cooldown', 'Charisma'], ['Encore', 'Rare', 'Singer', 'Your sing will stun opponents who are already charmed.', '+4 Health', 'Charisma, Sing'], ['Last Second Negotiation', 'Common', 'The Negotiator', 'Most enemies will hesitate a moment longer to execute you.', '+1 Ether, +1 Health', 'Charisma'], ['Vow of Mastery', 'Common', 'Vow of Mastery', 'The Vow of Mastery grants the Master the power to command their Subject. To initiate a vow you must ask the other player if they\'d like to make the vow. e.g. "wanna make a vow of mastery?"', '+1 Ether, +1 Health', 'Charisma'], ['Command: Run', 'Common', 'Vow of Mastery', 'Command your servant to run with all their might.', '+4 Ether, +4 Health', 'Charisma, Vow of Mastery'], ['Command: Fight', 'Common', 'Vow of Mastery', 'Command your servants to fight for their master, granting them enhanced stats for a duration', '+4 Ether, +4 Health', 'Charisma, Vow of Mastery'], ['Command: Sacrifice', 'Rare', 'Vow of Mastery', 'Sacrifice the health of a servant in order to restore your own.', '+4 Ether, +3 Health', 'Charisma, Vow of Mastery'], ['Command: Return', 'Rare', 'Vow of Mastery', 'Command your servant to obey your vow and return to your side.', '+4 Ether, +4 Health', 'Charisma, Vow of Mastery'], ['Command: Live', 'Legendary', 'Vow of Mastery', 'Once per hour, command a servant to defy all odds and obey your command - live.', '+4 Ether, +4 Health', 'Charisma, Vow of Mastery']], 'Req15': [], 'Req10': [['Pickpocket', 'Common', 'Thief', 'Gain the ability to pickpocket by pressing "N" on a downed person.', '+4 Ether, +2 Passive Agility', '10 Charisma']], 'Req5': []}
const fortitudeObj = {'Req50': [], 'Req45': [], 'Req40': [], 'Req35': [], 'Req30': [['Blood Shadow', 'Rare', 'Comrade', 'Allies you Reinforce are drained of their HP until you are fully healed.', '', '30 Fortitude, Reinforce'], ['Grand Support', 'Rare', 'Comrade', 'Everyone you buff heals them slightly.', '+4 Health', '30 Fortitude, Reinforce'], ['Lord Commander', 'Rare', 'Comrade', 'Everyone you buff with Reinforce heals you by 1% ', '', '30 Fortitude, Reinforce']], 'Req25': [], 'Req20': [['Moving Fortress', 'Common', 'Bastion', 'Blocking no longer slows you down as much.', '+4 Health, +1 Carry Load', 'Fortitude'], ['Heavy Haul', 'Common', 'Bastion', 'Enemies who carry you move significantly slower.', '+2 Health', 'Fortitude'], ['Braced Collapse', 'Common', 'Bastion', 'After being block broken, the next attack to hit you deals reduced damage.', '', 'Fortitude'], ['Berserker', 'Common', 'Bastion', 'Knocking an enemy grants you defense.', '+3 Health, +9 Carry Load', 'Fortitude'], ['Battle Tendency', 'Common', 'Bastion', 'You can breathe more easily with +20% faster posture regen.', '+3 Health, +10 Sanity', 'Fortitude'], ['Firmly Planted', 'Common', 'Bastion', 'All slow debuffs towards you are cut in half.', '+3 Health, +5 Sanity', 'Fortitude'], ['Perseverance', 'Common', 'Bastion', 'When knocked down, you get back up again more quickly.', '+3 Health, +3 Sanity', 'Fortitude'], ['Reinforced Armor', 'Legendary', 'Bastion', 'Incoming PEN is reduced by 30%.', '+10 Ether, +9 Health', 'Fortitude'], ['Exoskeleton', 'Legendary', 'Freak Of Nature', 'ou have a layer of fortified Natural Armor that replenishes when you rest. Your Natural Armor will resist 15% Physical Damage when active.', '+10 Health', 'Fortitude'], ['Fists of Fortitude', 'Rare', 'Navaen Nomad', ' Every 6 Light Hits builds of a Shield of Endurance (Ether Shield) reducing incoming damage by 25%.', 'Ether Shield', 'Fortitude, Fist Style']], 'Req15': [], 'Req10': [], 'Req5': [['Pack Mule', 'Common', 'Survivor', 'The max quantity of carrying food has increased. ', '+4 Health, +1 Carry Load', '5 Fortitude']]}
const willpowerObj = {'Req50': [], 'Req45': [], 'Req40': [], 'Req35': [], 'Req30': [], 'Req25': [], 'Req20': [['Eyes in the back of your head', 'Rare', 'Hunter', 'Your glare now ignores if your opponent is facing you.', '+5 Sanity', 'Willpower, Glare'], ['Undying Flame', 'Rare', 'Undying Ember', 'Your flame can be casted in the depths.', '+1 Elemental Intensity, +2 Health', 'Willpower, Unyielding Inferno']], 'Req15': [], 'Req10': [['Giantslayer', 'Common', 'Beast Slayer', 'Deal more damage to larger foes.', '+3 Health, +7 Sanity', '10 Willpower']], 'Req5': [['Carnivore', 'Rare', 'Apex Predator', 'In return for losing the ability to eat vegetation, sate your hunger by gripping monsters and people alike.', '+3 Health', '5 Strength, 5 Willpower, must not have Vegetarian Flaw'], ['Breathing Exercise', 'Common', 'Mental Fortress', 'Your sanity recovers more quickly once out of terrifying situations.', '+3 Health, +4 Sanity', '5 Willpower'], ['Conquer your Fears', 'Common', 'Mental Fortress', 'Killing the beings of the deep replenishes your sanity somewhat.', '+2 Health, +1 Sanity', '5 Willpower'], ['Disbelief', 'Common', 'Mental Fortress', "You're resistant to the effects of Illusion magic.", '+5 Sanity', '5 Willpower'], ['Encouraging Presence', 'Common', 'Mental Fortress', 'Allies that grip enemies near you recover Sanity.', '+3 Health, +6 Sanity', '5 Willpower'], ['Unyielding Focus', 'Common', 'Mental Fortress', 'our conviction is true. No sugar-coated words or charms can sway you from your goals. You are resistant to charms and tricks.', '+3 Health, +6 Sanity', '5 Willpower']]}
const intelligenceObj = {'Req50': [], 'Req45': [], 'Req40': [['Overflowing Dam', 'Rare', 'Caster', 'Having max ether makes your attacks do more damage. ', '15 % dmg buff', '40 Intelligence']], 'Req35': [], 'Req30': [], 'Req25': [], 'Req20': [['Apothecary', 'Common', 'Alchemist', 'Potions you prepare will have amplified positive effects when consumed. ', '+4 Ether, +7 Reservoir, +2 Health', 'Intelligence'], ['Exterminator', 'Common', 'Alchemist', 'Potions you create will have amplified negative effects when thrown.', '+4 Ether, +5 Reservoir, +1 Health', 'Intelligence'], ['Subsistence', 'Rare', 'Alchemist', 'As a skilled apothecarian, you are more accustomed to potions and gain greater benefits from their ingestion. ', '+3 Health', 'Intelligence'], ['Wild Alchemy', 'Common', 'Alchemist', 'Potions you prepare will have a chance to have doubled ingredients when mixed. ', '+4 Ether, +2 Reservoir, +1 Health', 'Intelligence'], ['Master Craftsman', 'Common', 'Artisan', 'Your skills alone substitute the need for a Craft Station.', '', 'Intelligence'], ['Perfect Flash', 'Rare', 'Caster', 'Having full health causes your mantras do 1.25x damage.', '', 'Intelligence'], ['Eureka', 'Rare', 'Caster', 'Receive ether back on every successful perfect cast.', '+7 Carry Load, +2 Elemental Intensity', 'Intelligence'], ['Ether Absorption', 'Common', 'Caster', 'Receive Ether back when inflicted with damage from Mantras.', '+7 Carry Load, +2 Elemental Intensity', 'Intelligence'], ['Ether Conduit', 'Common', 'Caster', 'Successful hits with your mantra inspire you stacking up to 3 causing your mantra to deal more damage for a set duration', '+7 Carry Load, +2 Elemental Intensity', 'Intelligence'], ['Everchanging Aegis', 'Legendary', 'Caster', 'When hit with an element, take reduced damage from said element, but take more damage from any other element.', '', 'Intelligence'], ['Nullifying Clarity', 'Common', 'Ether Adept', 'Deal more damage to enemies with status effects on them with your basic attacks, but the effect is removed upon impact.', '+2 Health, +5 Ether', 'Intelligence'], ['Ether Blade', 'Common', 'Ether Adept', 'Draw your foes ether into your weapon when you parry ether-based attacks.', '+2 Ether, +5 Reservoir, +3 Health', 'Intelligence'], ['Magical Resolve', 'Common', 'Ether Adept', 'Being hit increases ether regen for a short duration.', '+3 Health, +7 Sanity', 'Intelligence'], ['Charged Return', 'Common', 'Ether Adept', 'Being under an elemental status effect causes your physical attacks to do more damage.', '+2 Health', 'Intelligence'], ['The Thinker', 'Common', 'Genius Intellect', 'Standing still for 15 seconds causes you to rapidly regenerate reservoir and ether.', '+5 Ether, +10 Reservoir', 'Intelligence'], ['True Ether Bullets', 'Legendary', 'Gunslinger ', 'Using Ether Bullets applies elemental damage of your highest investment.', '+4 Ether, +7 Reservoir', 'Intelligence, Guns, Ether Bullets'], ['Neuroplasticity', 'Legendary', 'Genius Intellect', 'Your mind is a pliable, flexible substance. Adding modifications to a Mantra now has a reduced Ether cost.', '+1 Wildcard Mantra Slot, +20 Reservoir', 'Intelligence, Modified a Mantra']], 'Req15': [], 'Req10': [], 'Req5': []}
const strengthObj = {'Req50': [], 'Req45': [], 'Req40': [], 'Req35': [], 'Req30': [], 'Req25': [], 'Req20': [['Heavy Lifting', 'Common', 'Athlete', 'You can lift heavy objects with ease.', '+4 Health, +9 Carry Load', 'Strength'], ['Pitcher', 'Common', 'Athlete', 'You can throw things further.', '+1 Carry Load, +1 Passive Agility, +3 Health', 'Strength'], ["Champion's Regalia", 'Rare', 'Navaen Nomad', 'Flourishing an opponent grants you 1.5x posture damage for 10 seconds.', '+4 Health, +1 Carry Load', 'Strength'], ['Treefelling Blow', 'Common', 'Raging Bull', "You can collect lumber from the trees you fell with your fists. Look, it's hilarious, are you gonna take it or not? ", '', 'Strength']], 'Req15': [], 'Req10': [['Million Ton Piercer', 'Legendary', 'One Eyed King', 'Your PEN is uncapped, go beyond your limits. ', '+10 Ether, 9 Health', '100 Strength']], 'Req5': [['Carnivore', 'Rare', 'Apex Predator', 'In return for losing the ability to eat vegetation, sate your hunger by gripping monsters and people alike.', '+3 Health', '5 Strength, 5 Willpower, must not have Vegetarian Flaw']]}
  
  let eligibleCharisma = []
  let eligibleAgility = []
  let eligibleFortitude = []
  let eligibleWillpower = []
  let eligibleIntelligence = []
  let eligibleStrength = []

function requestTalents(agility, charisma, fortitude, willpower, intelligence, strength) {
  eligibleCharisma = []
  eligibleAgility = []
  eligibleFortitude = []
  eligibleWillpower = []
  eligibleIntelligence = []
  eligibleStrength = []
    if (agility >= 5) {
        for (let a in agilityObj['Req5']) {
            eligibleAgility.push(agilityObj['Req5'][a])
        }
    }  if (agility >= 10) {
        for (let a in agilityObj['Req10']) {
            eligibleAgility.push(agilityObj['Req10'][a])
        }
    }  if (agility >= 15) {
        for (let a in agilityObj['Req15']) {
            eligibleAgility.push(agilityObj['Req15'][a])
        }
    }  if (agility >= 20) {
        for (let a in agilityObj['Req20']) {
            eligibleAgility.push(agilityObj['Req20'][a])
        }
    }  if (agility >= 25) {
        for (let a in agilityObj['Req25']) {
            eligibleAgility.push(agilityObj['Req25'][a])
        }
    }  if (agility >= 30) {
        for (let a in agilityObj['Req30']) {
            eligibleAgility.push(agilityObj['Req30'][a])
        }
    }  if (agility >= 35) {
        for (let a in agilityObj['Req35']) {
            eligibleAgility.push(agilityObj['Req35'][a])
        }
    }

    if (charisma >= 5) {
        for (let a in charismaObj['Req5']) {
            eligibleCharisma.push(charismaObj['Req5'][a])
        }
    }  if (charisma >= 10) {
        for (let a in charismaObj['Req10']) {
            eligibleCharisma.push(charismaObj['Req10'][a])
        }
    }  if (charisma >= 15) {
        for (let a in charismaObj['Req15']) {
            eligibleCharisma.push(charismaObj['Req15'][a])
        }
    }  if (charisma >= 20) {
        for (let a in charismaObj['Req20']) {
            eligibleCharisma.push(charismaObj['Req20'][a])
        }
    }  if (charisma >= 25) {
        for (let a in charismaObj['Req25']) {
            eligibleCharisma.push(charismaObj['Req25'][a])
        }
    }  if (charisma >= 30) {
        for (let a in charismaObj['Req30']) {
            eligibleCharisma.push(charismaObj['Req30'][a])
        }
    }  if (charisma >= 35) {
        for (let a in charismaObj['Req35']) {
            eligibleCharisma.push(charismaObj['Req35'][a])
        }
    }


    if (fortitude >= 5) {
        for (let a in fortitudeObj['Req5']) {
            eligibleFortitude.push(fortitudeObj['Req5'][a])
        }
    }  if (fortitude >= 10) {
        for (let a in fortitudeObj['Req10']) {
            eligibleFortitude.push(fortitudeObj['Req10'][a])
        }
    }  if (fortitude >= 15) {
        for (let a in fortitudeObj['Req15']) {
            eligibleFortitude.push(fortitudeObj['Req15'][a])
        }
    }  if (fortitude >= 20) {
        for (let a in fortitudeObj['Req20']) {
            eligibleFortitude.push(fortitudeObj['Req20'][a])
        }
    }  if (fortitude >= 25) {
        for (let a in fortitudeObj['Req25']) {
            eligibleFortitude.push(fortitudeObj['Req25'][a])
        }
    }  if (fortitude >= 30) {
        for (let a in fortitudeObj['Req30']) {
            eligibleFortitude.push(fortitudeObj['Req30'][a])
        }
    }  if (fortitude >= 35) {
        for (let a in fortitudeObj['Req35']) {
            eligibleFortitude.push(fortitudeObj['Req35'][a])
        }
    }

    if (willpower >= 5) {
        for (let a in willpowerObj['Req5']) {
            eligibleWillpower.push(willpowerObj['Req5'][a])
        }
    }  if (willpower >= 10) {
        for (let a in willpowerObj['Req10']) {
            eligibleWillpower.push(willpowerObj['Req10'][a])
        }
    }  if (willpower >= 15) {
        for (let a in willpowerObj['Req15']) {
            eligibleWillpower.push(willpowerObj['Req15'][a])
        }
    }  if (willpower >= 20) {
        for (let a in willpowerObj['Req20']) {
            eligibleWillpower.push(willpowerObj['Req20'][a])
        }
    }  if (willpower >= 25) {
        for (let a in willpowerObj['Req25']) {
            eligibleWillpower.push(willpowerObj['Req25'][a])
        }
    }  if (willpower >= 30) {
        for (let a in willpowerObj['Req30']) {
            eligibleWillpower.push(willpowerObj['Req30'][a])
        }
    }  if (willpower >= 35) {
        for (let a in willpowerObj['Req35']) {
            eligibleWillpower.push(willpowerObj['Req35'][a])
        }
    }

    if (intelligence >= 5) {
        for (let a in intelligenceObj['Req5']) {
            eligibleIntelligence.push(intelligenceObj['Req5'][a])
        }
    }  if (intelligence >= 10) {
        for (let a in intelligenceObj['Req10']) {
            eligibleIntelligence.push(intelligenceObj['Req10'][a])
        }
    }  if (intelligence >= 15) {
        for (let a in intelligenceObj['Req15']) {
            eligibleIntelligence.push(intelligenceObj['Req15'][a])
        }
    }  if (intelligence >= 20) {
        for (let a in intelligenceObj['Req20']) {
            eligibleIntelligence.push(intelligenceObj['Req20'][a])
        }
    }  if (intelligence >= 25) {
        for (let a in intelligenceObj['Req25']) {
            eligibleIntelligence.push(intelligenceObj['Req25'][a])
        }
    }  if (intelligence >= 30) {
        for (let a in intelligenceObj['Req30']) {
            eligibleIntelligence.push(intelligenceObj['Req30'][a])
        }
    }  if (intelligence >= 35) {
        for (let a in intelligenceObj['Req35']) {
            eligibleIntelligence.push(intelligenceObj['Req35'][a])
        }
    }

    if (strength >= 5) {
        for (let a in strengthObj['Req5']) {
            eligibleStrength.push(strengthObj['Req5'][a])
        }
    }  if (strength >= 10) {
        for (let a in strengthObj['Req10']) {
            eligibleStrength.push(strengthObj['Req10'][a])
        }
    }  if (strength >= 15) {
        for (let a in strengthObj['Req15']) {
            eligibleStrength.push(strengthObj['Req15'][a])
        }
    }  if (strength >= 20) {
        for (let a in strengthObj['Req20']) {
            eligibleStrength.push(strengthObj['Req20'][a])
        }
    }  if (strength >= 25) {
        for (let a in strengthObj['Req25']) {
            eligibleStrength.push(strengthObj['Req25'][a])
        }
    }  if (strength >= 30) {
        for (let a in strengthObj['Req30']) {
            eligibleStrength.push(strengthObj['Req30'][a])
        }
    }  if (strength >= 35) {
        for (let a in strengthObj['Req35']) {
            eligibleStrength.push(strengthObj['Req35'][a])
        }
    }
console.log(eligibleAgility)
}


export {agilityObj, charismaObj, fortitudeObj, willpowerObj, intelligenceObj, strengthObj, requestTalents, eligibleCharisma,
  eligibleAgility,
  eligibleFortitude,
  eligibleWillpower,
  eligibleIntelligence,
  eligibleStrength} 
