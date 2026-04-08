import { Injectable } from '@angular/core';
import { DEFAULT_COLOR } from '../../pages/color/color';

export interface NamedColor {
  name: string;
  color: string;
}

@Injectable({
  providedIn: 'root',
})
export class ColorService {
  private readonly colors: NamedColor[] = [
    { name: 'Toronja', color: `#${DEFAULT_COLOR}` },
    {
      name: 'Air Force blue',
      color: '#5d8aa8',
    },
    {
      name: 'Alice blue',
      color: '#f0f8ff',
    },
    {
      name: 'Alizarin crimson',
      color: '#e32636',
    },
    {
      name: 'Almond',
      color: '#efdecd',
    },
    {
      name: 'Amaranth',
      color: '#e52b50',
    },
    {
      name: 'Amber',
      color: '#ffbf00',
    },
    {
      name: 'American rose',
      color: '#ff033e',
    },
    {
      name: 'Amethyst',
      color: '#9966cc',
    },
    {
      name: 'Android Green',
      color: '#a4c639',
    },
    {
      name: 'Anti-flash white',
      color: '#f2f3f4',
    },
    {
      name: 'Antique brass',
      color: '#cd9575',
    },
    {
      name: 'Antique fuchsia',
      color: '#915c83',
    },
    {
      name: 'Antique white',
      color: '#faebd7',
    },
    {
      name: 'Ao',
      color: '#008000',
    },
    {
      name: 'Apple green',
      color: '#8db600',
    },
    {
      name: 'Apricot',
      color: '#fbceb1',
    },
    {
      name: 'Aqua',
      color: '#00ffff',
    },
    {
      name: 'Aquamarine',
      color: '#7fffd4',
    },
    {
      name: 'Army green',
      color: '#4b5320',
    },
    {
      name: 'Arylide yellow',
      color: '#e9d66b',
    },
    {
      name: 'Ash grey',
      color: '#b2beb5',
    },
    {
      name: 'Asparagus',
      color: '#87a96b',
    },
    {
      name: 'Atomic tangerine',
      color: '#ff9966',
    },
    {
      name: 'Auburn',
      color: '#a52a2a',
    },
    {
      name: 'Aureolin',
      color: '#fdee00',
    },
    {
      name: 'AuroMetalSaurus',
      color: '#6e7f80',
    },
    {
      name: 'Awesome',
      color: '#ff2052',
    },
    {
      name: 'Azure',
      color: '#007fff',
    },
    {
      name: 'Azure mist/web',
      color: '#f0ffff',
    },
    {
      name: 'Baby blue',
      color: '#89cff0',
    },
    {
      name: 'Baby blue eyes',
      color: '#a1caf1',
    },
    {
      name: 'Baby pink',
      color: '#f4c2c2',
    },
    {
      name: 'Ball Blue',
      color: '#21abcd',
    },
    {
      name: 'Banana Mania',
      color: '#fae7b5',
    },
    {
      name: 'Banana yellow',
      color: '#ffe135',
    },
    {
      name: 'Battleship grey',
      color: '#848482',
    },
    {
      name: 'Bazaar',
      color: '#98777b',
    },
    {
      name: 'Beau blue',
      color: '#bcd4e6',
    },
    {
      name: 'Beaver',
      color: '#9f8170',
    },
    {
      name: 'Beige',
      color: '#f5f5dc',
    },
    {
      name: 'Bisque',
      color: '#ffe4c4',
    },
    {
      name: 'Bistre',
      color: '#3d2b1f',
    },
    {
      name: 'Bittersweet',
      color: '#fe6f5e',
    },
    {
      name: 'Black',
      color: '#000000',
    },
    {
      name: 'Blanched Almond',
      color: '#ffebcd',
    },
    {
      name: 'Bleu de France',
      color: '#318ce7',
    },
    {
      name: 'Blizzard Blue',
      color: '#ace5ee',
    },
    {
      name: 'Blond',
      color: '#faf0be',
    },
    {
      name: 'Blue',
      color: '#0000ff',
    },
    {
      name: 'Blue Bell',
      color: '#a2a2d0',
    },
    {
      name: 'Blue Gray',
      color: '#6699cc',
    },
    {
      name: 'Blue green',
      color: '#0d98ba',
    },
    {
      name: 'Blue purple',
      color: '#8a2be2',
    },
    {
      name: 'Blush',
      color: '#de5d83',
    },
    {
      name: 'Bole',
      color: '#79443b',
    },
    {
      name: 'Bondi blue',
      color: '#0095b6',
    },
    {
      name: 'Bone',
      color: '#e3dac9',
    },
    {
      name: 'Boston University Red',
      color: '#cc0000',
    },
    {
      name: 'Bottle green',
      color: '#006a4e',
    },
    {
      name: 'Boysenberry',
      color: '#873260',
    },
    {
      name: 'Brandeis blue',
      color: '#0070ff',
    },
    {
      name: 'Brass',
      color: '#b5a642',
    },
    {
      name: 'Brick red',
      color: '#cb4154',
    },
    {
      name: 'Bright cerulean',
      color: '#1dacd6',
    },
    {
      name: 'Bright green',
      color: '#66ff00',
    },
    {
      name: 'Bright lavender',
      color: '#bf94e4',
    },
    {
      name: 'Bright maroon',
      color: '#c32148',
    },
    {
      name: 'Bright pink',
      color: '#ff007f',
    },
    {
      name: 'Bright turquoise',
      color: '#08e8de',
    },
    {
      name: 'Bright ube',
      color: '#d19fe8',
    },
    {
      name: 'Brilliant lavender',
      color: '#f4bbff',
    },
    {
      name: 'Brilliant rose',
      color: '#ff55a3',
    },
    {
      name: 'Brink pink',
      color: '#fb607f',
    },
    {
      name: 'British racing green',
      color: '#004225',
    },
    {
      name: 'Bronze',
      color: '#cd7f32',
    },
    {
      name: 'Bubble gum',
      color: '#ffc1cc',
    },
    {
      name: 'Bubbles',
      color: '#e7feff',
    },
    {
      name: 'Buff',
      color: '#f0dc82',
    },
    {
      name: 'Bulgarian rose',
      color: '#480607',
    },
    {
      name: 'Burgundy',
      color: '#800020',
    },
    {
      name: 'Burlywood',
      color: '#deb887',
    },
    {
      name: 'Burnt orange',
      color: '#cc5500',
    },
    {
      name: 'Burnt sienna',
      color: '#e97451',
    },
    {
      name: 'Burnt umber',
      color: '#8a3324',
    },
    {
      name: 'Byzantine',
      color: '#bd33a4',
    },
    {
      name: 'Byzantium',
      color: '#702963',
    },
    {
      name: 'CG Blue',
      color: '#007aa5',
    },
    {
      name: 'CG Red',
      color: '#e03c31',
    },
    {
      name: 'Cadet',
      color: '#536872',
    },
    {
      name: 'Cadet blue',
      color: '#5f9ea0',
    },
    {
      name: 'Cadet grey',
      color: '#91a3b0',
    },
    {
      name: 'Cadmium green',
      color: '#006b3c',
    },
    {
      name: 'Cadmium orange',
      color: '#ed872d',
    },
    {
      name: 'Cadmium red',
      color: '#e30022',
    },
    {
      name: 'Cadmium yellow',
      color: '#fff600',
    },
    {
      name: 'Café au lait',
      color: '#a67b5b',
    },
    {
      name: 'Café noir',
      color: '#4b3621',
    },
    {
      name: 'Cal Poly Pomona green',
      color: '#1e4d2b',
    },
    {
      name: 'Cambridge Blue',
      color: '#a3c1ad',
    },
    {
      name: 'Camel',
      color: '#c19a6b',
    },
    {
      name: 'Camouflage green',
      color: '#78866b',
    },
    {
      name: 'Canary',
      color: '#ffff99',
    },
    {
      name: 'Canary yellow',
      color: '#ffef00',
    },
    {
      name: 'Candy apple red',
      color: '#ff0800',
    },
    {
      name: 'Candy pink',
      color: '#e4717a',
    },
    {
      name: 'Capri',
      color: '#00bfff',
    },
    {
      name: 'Caput mortuum',
      color: '#592720',
    },
    {
      name: 'Cardinal',
      color: '#c41e3a',
    },
    {
      name: 'Caribbean green',
      color: '#00cc99',
    },
    {
      name: 'Carmine',
      color: '#ff0040',
    },
    {
      name: 'Carmine pink',
      color: '#eb4c42',
    },
    {
      name: 'Carmine red',
      color: '#ff0038',
    },
    {
      name: 'Carnation pink',
      color: '#ffa6c9',
    },
    {
      name: 'Carnelian',
      color: '#b31b1b',
    },
    {
      name: 'Carolina blue',
      color: '#99badd',
    },
    {
      name: 'Carrot orange',
      color: '#ed9121',
    },
    {
      name: 'Celadon',
      color: '#ace1af',
    },
    {
      name: 'Celeste',
      color: '#b2ffff',
    },
    {
      name: 'Celestial blue',
      color: '#4997d0',
    },
    {
      name: 'Cerise',
      color: '#de3163',
    },
    {
      name: 'Cerise pink',
      color: '#ec3b83',
    },
    {
      name: 'Cerulean',
      color: '#007ba7',
    },
    {
      name: 'Cerulean blue',
      color: '#2a52be',
    },
    {
      name: 'Chamoisee',
      color: '#a0785a',
    },
    {
      name: 'Champagne',
      color: '#fad6a5',
    },
    {
      name: 'Charcoal',
      color: '#36454f',
    },
    {
      name: 'Chartreuse',
      color: '#7fff00',
    },
    {
      name: 'Cherry blossom pink',
      color: '#ffb7c5',
    },
    {
      name: 'Chestnut',
      color: '#cd5c5c',
    },
    {
      name: 'Chocolate',
      color: '#d2691e',
    },
    {
      name: 'Chrome yellow',
      color: '#ffa700',
    },
    {
      name: 'Cinereous',
      color: '#98817b',
    },
    {
      name: 'Cinnabar',
      color: '#e34234',
    },
    {
      name: 'Citrine',
      color: '#e4d00a',
    },
    {
      name: 'Classic rose',
      color: '#fbcce7',
    },
    {
      name: 'Cobalt',
      color: '#0047ab',
    },
    {
      name: 'Coffee',
      color: '#6f4e37',
    },
    {
      name: 'Columbia blue',
      color: '#9bddff',
    },
    {
      name: 'Cool black',
      color: '#002e63',
    },
    {
      name: 'Cool grey',
      color: '#8c92ac',
    },
    {
      name: 'Copper',
      color: '#b87333',
    },
    {
      name: 'Copper rose',
      color: '#996666',
    },
    {
      name: 'Coquelicot',
      color: '#ff3800',
    },
    {
      name: 'Coral',
      color: '#ff7f50',
    },
    {
      name: 'Coral pink',
      color: '#f88379',
    },
    {
      name: 'Coral red',
      color: '#ff4040',
    },
    {
      name: 'Cordovan',
      color: '#893f45',
    },
    {
      name: 'Corn',
      color: '#fbec5d',
    },
    {
      name: 'Cornflower',
      color: '#9aceeb',
    },
    {
      name: 'Cornflower blue',
      color: '#6495ed',
    },
    {
      name: 'Cornsilk',
      color: '#fff8dc',
    },
    {
      name: 'Cosmic latte',
      color: '#fff8e7',
    },
    {
      name: 'Cotton candy',
      color: '#ffbcd9',
    },
    {
      name: 'Cream',
      color: '#fffdd0',
    },
    {
      name: 'Crimson',
      color: '#dc143c',
    },
    {
      name: 'Crimson Red',
      color: '#990000',
    },
    {
      name: 'Crimson glory',
      color: '#be0032',
    },
    {
      name: 'Daffodil',
      color: '#ffff31',
    },
    {
      name: 'Dandelion',
      color: '#f0e130',
    },
    {
      name: 'Dark blue',
      color: '#00008b',
    },
    {
      name: 'Dark brown',
      color: '#654321',
    },
    {
      name: 'Dark byzantium',
      color: '#5d3954',
    },
    {
      name: 'Dark candy apple red',
      color: '#a40000',
    },
    {
      name: 'Dark cerulean',
      color: '#08457e',
    },
    {
      name: 'Dark chestnut',
      color: '#986960',
    },
    {
      name: 'Dark coral',
      color: '#cd5b45',
    },
    {
      name: 'Dark cyan',
      color: '#008b8b',
    },
    {
      name: 'Dark electric blue',
      color: '#536878',
    },
    {
      name: 'Dark goldenrod',
      color: '#b8860b',
    },
    {
      name: 'Dark gray',
      color: '#a9a9a9',
    },
    {
      name: 'Dark green',
      color: '#013220',
    },
    {
      name: 'Dark jungle green',
      color: '#1a2421',
    },
    {
      name: 'Dark khaki',
      color: '#bdb76b',
    },
    {
      name: 'Dark lava',
      color: '#483c32',
    },
    {
      name: 'Dark lavender',
      color: '#734f96',
    },
    {
      name: 'Dark magenta',
      color: '#8b008b',
    },
    {
      name: 'Dark midnight blue',
      color: '#003366',
    },
    {
      name: 'Dark olive green',
      color: '#556b2f',
    },
    {
      name: 'Dark orange',
      color: '#ff8c00',
    },
    {
      name: 'Dark orchid',
      color: '#9932cc',
    },
    {
      name: 'Dark pastel blue',
      color: '#779ecb',
    },
    {
      name: 'Dark pastel green',
      color: '#03c03c',
    },
    {
      name: 'Dark pastel purple',
      color: '#966fd6',
    },
    {
      name: 'Dark pastel red',
      color: '#c23b22',
    },
    {
      name: 'Dark pink',
      color: '#e75480',
    },
    {
      name: 'Dark powder blue',
      color: '#003399',
    },
    {
      name: 'Dark raspberry',
      color: '#872657',
    },
    {
      name: 'Dark red',
      color: '#8b0000',
    },
    {
      name: 'Dark salmon',
      color: '#e9967a',
    },
    {
      name: 'Dark scarlet',
      color: '#560319',
    },
    {
      name: 'Dark sea green',
      color: '#8fbc8f',
    },
    {
      name: 'Dark sienna',
      color: '#3c1414',
    },
    {
      name: 'Dark slate blue',
      color: '#483d8b',
    },
    {
      name: 'Dark slate gray',
      color: '#2f4f4f',
    },
    {
      name: 'Dark spring green',
      color: '#177245',
    },
    {
      name: 'Dark tan',
      color: '#918151',
    },
    {
      name: 'Dark tangerine',
      color: '#ffa812',
    },
    {
      name: 'Dark terra cotta',
      color: '#cc4e5c',
    },
    {
      name: 'Dark turquoise',
      color: '#00ced1',
    },
    {
      name: 'Dark violet',
      color: '#9400d3',
    },
    {
      name: 'Dartmouth green',
      color: '#00693e',
    },
    {
      name: 'Davy grey',
      color: '#555555',
    },
    {
      name: 'Debian red',
      color: '#d70a53',
    },
    {
      name: 'Deep carmine',
      color: '#a9203e',
    },
    {
      name: 'Deep carmine pink',
      color: '#ef3038',
    },
    {
      name: 'Deep carrot orange',
      color: '#e9692c',
    },
    {
      name: 'Deep cerise',
      color: '#da3287',
    },
    {
      name: 'Deep chestnut',
      color: '#b94e48',
    },
    {
      name: 'Deep coffee',
      color: '#704241',
    },
    {
      name: 'Deep fuchsia',
      color: '#c154c1',
    },
    {
      name: 'Deep jungle green',
      color: '#004b49',
    },
    {
      name: 'Deep lilac',
      color: '#9955bb',
    },
    {
      name: 'Deep magenta',
      color: '#cc00cc',
    },
    {
      name: 'Deep peach',
      color: '#ffcba4',
    },
    {
      name: 'Deep pink',
      color: '#ff1493',
    },
    {
      name: 'Deep saffron',
      color: '#ff9933',
    },
    {
      name: 'Denim',
      color: '#1560bd',
    },
    {
      name: 'Desert sand',
      color: '#edc9af',
    },
    {
      name: 'Dim gray',
      color: '#696969',
    },
    {
      name: 'Dodger blue',
      color: '#1e90ff',
    },
    {
      name: 'Dogwood rose',
      color: '#d71868',
    },
    {
      name: 'Dollar bill',
      color: '#85bb65',
    },
    {
      name: 'Drab',
      color: '#967117',
    },
    {
      name: 'Duke blue',
      color: '#00009c',
    },
    {
      name: 'Earth yellow',
      color: '#e1a95f',
    },
    {
      name: 'Ecru',
      color: '#c2b280',
    },
    {
      name: 'Eggplant',
      color: '#614051',
    },
    {
      name: 'Eggshell',
      color: '#f0ead6',
    },
    {
      name: 'Egyptian blue',
      color: '#1034a6',
    },
    {
      name: 'Electric blue',
      color: '#7df9ff',
    },
    {
      name: 'Electric crimson',
      color: '#ff003f',
    },
    {
      name: 'Electric green',
      color: '#00ff00',
    },
    {
      name: 'Electric indigo',
      color: '#6f00ff',
    },
    {
      name: 'Electric lime',
      color: '#ccff00',
    },
    {
      name: 'Electric purple',
      color: '#bf00ff',
    },
    {
      name: 'Electric ultramarine',
      color: '#3f00ff',
    },
    {
      name: 'Electric violet',
      color: '#8f00ff',
    },
    {
      name: 'Electric yellow',
      color: '#ffff00',
    },
    {
      name: 'Emerald',
      color: '#50c878',
    },
    {
      name: 'Eton blue',
      color: '#96c8a2',
    },
    {
      name: 'Falu red',
      color: '#801818',
    },
    {
      name: 'Famous',
      color: '#ff00ff',
    },
    {
      name: 'Fandango',
      color: '#b53389',
    },
    {
      name: 'Fashion fuchsia',
      color: '#f400a1',
    },
    {
      name: 'Fawn',
      color: '#e5aa70',
    },
    {
      name: 'Feldgrau',
      color: '#4d5d53',
    },
    {
      name: 'Fern',
      color: '#71bc78',
    },
    {
      name: 'Fern green',
      color: '#4f7942',
    },
    {
      name: 'Ferrari Red',
      color: '#ff2800',
    },
    {
      name: 'Field drab',
      color: '#6c541e',
    },
    {
      name: 'Fire engine red',
      color: '#ce2029',
    },
    {
      name: 'Firebrick',
      color: '#b22222',
    },
    {
      name: 'Flame',
      color: '#e25822',
    },
    {
      name: 'Flamingo pink',
      color: '#fc8eac',
    },
    {
      name: 'Flavescent',
      color: '#f7e98e',
    },
    {
      name: 'Flax',
      color: '#eedc82',
    },
    {
      name: 'Floral white',
      color: '#fffaf0',
    },
    {
      name: 'Folly',
      color: '#ff004f',
    },
    {
      name: 'Forest green',
      color: '#228b22',
    },
    {
      name: 'French blue',
      color: '#0072bb',
    },
    {
      name: 'French lilac',
      color: '#86608e',
    },
    {
      name: 'French rose',
      color: '#f64a8a',
    },
    {
      name: 'Fuchsia pink',
      color: '#ff77ff',
    },
    {
      name: 'Fulvous',
      color: '#e48400',
    },
    {
      name: 'Fuzzy Wuzzy',
      color: '#cc6666',
    },
    {
      name: 'Gainsboro',
      color: '#dcdcdc',
    },
    {
      name: 'Gamboge',
      color: '#e49b0f',
    },
    {
      name: 'Ghost white',
      color: '#f8f8ff',
    },
    {
      name: 'Ginger',
      color: '#b06500',
    },
    {
      name: 'Glaucous',
      color: '#6082b6',
    },
    {
      name: 'Glitter',
      color: '#e6e8fa',
    },
    {
      name: 'Gold',
      color: '#ffd700',
    },
    {
      name: 'Golden brown',
      color: '#996515',
    },
    {
      name: 'Golden poppy',
      color: '#fcc200',
    },
    {
      name: 'Golden yellow',
      color: '#ffdf00',
    },
    {
      name: 'Goldenrod',
      color: '#daa520',
    },
    {
      name: 'Granny Smith Apple',
      color: '#a8e4a0',
    },
    {
      name: 'Gray',
      color: '#808080',
    },
    {
      name: 'Gray asparagus',
      color: '#465945',
    },
    {
      name: 'Green Blue',
      color: '#1164b4',
    },
    {
      name: 'Green yellow',
      color: '#adff2f',
    },
    {
      name: 'Grullo',
      color: '#a99a86',
    },
    {
      name: 'Guppie green',
      color: '#00ff7f',
    },
    {
      name: 'Halayà úbe',
      color: '#663854',
    },
    {
      name: 'Han blue',
      color: '#446ccf',
    },
    {
      name: 'Han purple',
      color: '#5218fa',
    },
    {
      name: 'Harlequin',
      color: '#3fff00',
    },
    {
      name: 'Harvard crimson',
      color: '#c90016',
    },
    {
      name: 'Harvest Gold',
      color: '#da9100',
    },
    {
      name: 'Heart Gold',
      color: '#808000',
    },
    {
      name: 'Heliotrope',
      color: '#df73ff',
    },
    {
      name: 'Honeydew',
      color: '#f0fff0',
    },
    {
      name: 'Hooker green',
      color: '#49796b',
    },
    {
      name: 'Hot magenta',
      color: '#ff1dce',
    },
    {
      name: 'Hot pink',
      color: '#ff69b4',
    },
    {
      name: 'Hunter green',
      color: '#355e3b',
    },
    {
      name: 'Icterine',
      color: '#fcf75e',
    },
    {
      name: 'Inchworm',
      color: '#b2ec5d',
    },
    {
      name: 'India green',
      color: '#138808',
    },
    {
      name: 'Indian yellow',
      color: '#e3a857',
    },
    {
      name: 'Indigo',
      color: '#4b0082',
    },
    {
      name: 'International Klein Blue',
      color: '#002fa7',
    },
    {
      name: 'International orange',
      color: '#ff4f00',
    },
    {
      name: 'Iris',
      color: '#5a4fcf',
    },
    {
      name: 'Isabelline',
      color: '#f4f0ec',
    },
    {
      name: 'Islamic green',
      color: '#009000',
    },
    {
      name: 'Ivory',
      color: '#fffff0',
    },
    {
      name: 'Jade',
      color: '#00a86b',
    },
    {
      name: 'Jasmine',
      color: '#f8de7e',
    },
    {
      name: 'Jasper',
      color: '#d73b3e',
    },
    {
      name: 'Jazzberry jam',
      color: '#a50b5e',
    },
    {
      name: 'Jonquil',
      color: '#fada5e',
    },
    {
      name: 'June bud',
      color: '#bdda57',
    },
    {
      name: 'Jungle green',
      color: '#29ab87',
    },
    {
      name: 'KU Crimson',
      color: '#e8000d',
    },
    {
      name: 'Kelly green',
      color: '#4cbb17',
    },
    {
      name: 'Khaki',
      color: '#c3b091',
    },
    {
      name: 'La Salle Green',
      color: '#087830',
    },
    {
      name: 'Languid lavender',
      color: '#d6cadd',
    },
    {
      name: 'Lapis lazuli',
      color: '#26619c',
    },
    {
      name: 'Laser Lemon',
      color: '#fefe22',
    },
    {
      name: 'Laurel green',
      color: '#a9ba9d',
    },
    {
      name: 'Lava',
      color: '#cf1020',
    },
    {
      name: 'Lavender',
      color: '#e6e6fa',
    },
    {
      name: 'Lavender blue',
      color: '#ccccff',
    },
    {
      name: 'Lavender blush',
      color: '#fff0f5',
    },
    {
      name: 'Lavender gray',
      color: '#c4c3d0',
    },
    {
      name: 'Lavender indigo',
      color: '#9457eb',
    },
    {
      name: 'Lavender magenta',
      color: '#ee82ee',
    },
    {
      name: 'Lavender pink',
      color: '#fbaed2',
    },
    {
      name: 'Lavender purple',
      color: '#967bb6',
    },
    {
      name: 'Lavender rose',
      color: '#fba0e3',
    },
    {
      name: 'Lawn green',
      color: '#7cfc00',
    },
    {
      name: 'Lemon',
      color: '#fff700',
    },
    {
      name: 'Lemon Yellow',
      color: '#fff44f',
    },
    {
      name: 'Lemon chiffon',
      color: '#fffacd',
    },
    {
      name: 'Lemon lime',
      color: '#bfff00',
    },
    {
      name: 'Light Crimson',
      color: '#f56991',
    },
    {
      name: 'Light Thulian pink',
      color: '#e68fac',
    },
    {
      name: 'Light apricot',
      color: '#fdd5b1',
    },
    {
      name: 'Light blue',
      color: '#add8e6',
    },
    {
      name: 'Light brown',
      color: '#b5651d',
    },
    {
      name: 'Light carmine pink',
      color: '#e66771',
    },
    {
      name: 'Light coral',
      color: '#f08080',
    },
    {
      name: 'Light cornflower blue',
      color: '#93ccea',
    },
    {
      name: 'Light cyan',
      color: '#e0ffff',
    },
    {
      name: 'Light fuchsia pink',
      color: '#f984ef',
    },
    {
      name: 'Light goldenrod yellow',
      color: '#fafad2',
    },
    {
      name: 'Light gray',
      color: '#d3d3d3',
    },
    {
      name: 'Light green',
      color: '#90ee90',
    },
    {
      name: 'Light khaki',
      color: '#f0e68c',
    },
    {
      name: 'Light pastel purple',
      color: '#b19cd9',
    },
    {
      name: 'Light pink',
      color: '#ffb6c1',
    },
    {
      name: 'Light salmon',
      color: '#ffa07a',
    },
    {
      name: 'Light salmon pink',
      color: '#ff9999',
    },
    {
      name: 'Light sea green',
      color: '#20b2aa',
    },
    {
      name: 'Light sky blue',
      color: '#87cefa',
    },
    {
      name: 'Light slate gray',
      color: '#778899',
    },
    {
      name: 'Light taupe',
      color: '#b38b6d',
    },
    {
      name: 'Light yellow',
      color: '#ffffed',
    },
    {
      name: 'Lilac',
      color: '#c8a2c8',
    },
    {
      name: 'Lime green',
      color: '#32cd32',
    },
    {
      name: 'Lincoln green',
      color: '#195905',
    },
    {
      name: 'Linen',
      color: '#faf0e6',
    },
    {
      name: 'Liver',
      color: '#534b4f',
    },
    {
      name: 'Lust',
      color: '#e62020',
    },
    {
      name: 'MSU Green',
      color: '#18453b',
    },
    {
      name: 'Macaroni and Cheese',
      color: '#ffbd88',
    },
    {
      name: 'Magic mint',
      color: '#aaf0d1',
    },
    {
      name: 'Magnolia',
      color: '#f8f4ff',
    },
    {
      name: 'Mahogany',
      color: '#c04000',
    },
    {
      name: 'Majorelle Blue',
      color: '#6050dc',
    },
    {
      name: 'Malachite',
      color: '#0bda51',
    },
    {
      name: 'Manatee',
      color: '#979aaa',
    },
    {
      name: 'Mango Tango',
      color: '#ff8243',
    },
    {
      name: 'Mantis',
      color: '#74c365',
    },
    {
      name: 'Maroon',
      color: '#800000',
    },
    {
      name: 'Mauve',
      color: '#e0b0ff',
    },
    {
      name: 'Mauve taupe',
      color: '#915f6d',
    },
    {
      name: 'Mauvelous',
      color: '#ef98aa',
    },
    {
      name: 'Maya blue',
      color: '#73c2fb',
    },
    {
      name: 'Meat brown',
      color: '#e5b73b',
    },
    {
      name: 'Medium Persian blue',
      color: '#0067a5',
    },
    {
      name: 'Medium aquamarine',
      color: '#66ddaa',
    },
    {
      name: 'Medium blue',
      color: '#0000cd',
    },
    {
      name: 'Medium candy apple red',
      color: '#e2062c',
    },
    {
      name: 'Medium carmine',
      color: '#af4035',
    },
    {
      name: 'Medium champagne',
      color: '#f3e5ab',
    },
    {
      name: 'Medium electric blue',
      color: '#035096',
    },
    {
      name: 'Medium jungle green',
      color: '#1c352d',
    },
    {
      name: 'Medium lavender magenta',
      color: '#dda0dd',
    },
    {
      name: 'Medium orchid',
      color: '#ba55d3',
    },
    {
      name: 'Medium purple',
      color: '#9370db',
    },
    {
      name: 'Medium red violet',
      color: '#bb3385',
    },
    {
      name: 'Medium sea green',
      color: '#3cb371',
    },
    {
      name: 'Medium slate blue',
      color: '#7b68ee',
    },
    {
      name: 'Medium spring bud',
      color: '#c9dc87',
    },
    {
      name: 'Medium spring green',
      color: '#00fa9a',
    },
    {
      name: 'Medium taupe',
      color: '#674c47',
    },
    {
      name: 'Medium teal blue',
      color: '#0054b4',
    },
    {
      name: 'Medium turquoise',
      color: '#48d1cc',
    },
    {
      name: 'Medium violet red',
      color: '#c71585',
    },
    {
      name: 'Melon',
      color: '#fdbcb4',
    },
    {
      name: 'Midnight blue',
      color: '#191970',
    },
    {
      name: 'Midnight green',
      color: '#004953',
    },
    {
      name: 'Mikado yellow',
      color: '#ffc40c',
    },
    {
      name: 'Mint',
      color: '#3eb489',
    },
    {
      name: 'Mint cream',
      color: '#f5fffa',
    },
    {
      name: 'Mint green',
      color: '#98ff98',
    },
    {
      name: 'Misty rose',
      color: '#ffe4e1',
    },
    {
      name: 'Moonstone blue',
      color: '#73a9c2',
    },
    {
      name: 'Mordant red 19',
      color: '#ae0c00',
    },
    {
      name: 'Moss green',
      color: '#addfad',
    },
    {
      name: 'Mountain Meadow',
      color: '#30ba8f',
    },
    {
      name: 'Mountbatten pink',
      color: '#997a8d',
    },
    {
      name: 'Mulberry',
      color: '#c54b8c',
    },
    {
      name: 'Mustard',
      color: '#ffdb58',
    },
    {
      name: 'Myrtle',
      color: '#21421e',
    },
    {
      name: 'Nadeshiko pink',
      color: '#f6adc6',
    },
    {
      name: 'Napier green',
      color: '#2a8000',
    },
    {
      name: 'Navajo white',
      color: '#ffdead',
    },
    {
      name: 'Navy blue',
      color: '#000080',
    },
    {
      name: 'Neon Carrot',
      color: '#ffa343',
    },
    {
      name: 'Neon fuchsia',
      color: '#fe59c2',
    },
    {
      name: 'Neon green',
      color: '#39ff14',
    },
    {
      name: 'Non-photo blue',
      color: '#a4dded',
    },
    {
      name: 'North Texas Green',
      color: '#059033',
    },
    {
      name: 'Ocean Boat Blue',
      color: '#0077be',
    },
    {
      name: 'Ochre',
      color: '#cc7722',
    },
    {
      name: 'Old gold',
      color: '#cfb53b',
    },
    {
      name: 'Old lace',
      color: '#fdf5e6',
    },
    {
      name: 'Old lavender',
      color: '#796878',
    },
    {
      name: 'Old mauve',
      color: '#673147',
    },
    {
      name: 'Old rose',
      color: '#c08081',
    },
    {
      name: 'Olive Drab',
      color: '#6b8e23',
    },
    {
      name: 'Olive Green',
      color: '#bab86c',
    },
    {
      name: 'Olivine',
      color: '#9ab973',
    },
    {
      name: 'Onyx',
      color: '#0f0f0f',
    },
    {
      name: 'Opera mauve',
      color: '#b784a7',
    },
    {
      name: 'Orange',
      color: '#ffa500',
    },
    {
      name: 'Orange Yellow',
      color: '#f8d568',
    },
    {
      name: 'Orange peel',
      color: '#ff9f00',
    },
    {
      name: 'Orange red',
      color: '#ff4500',
    },
    {
      name: 'Orchid',
      color: '#da70d6',
    },
    {
      name: 'Outer Space',
      color: '#414a4c',
    },
    {
      name: 'Outrageous Orange',
      color: '#ff6e4a',
    },
    {
      name: 'Oxford Blue',
      color: '#002147',
    },
    {
      name: 'Pacific Blue',
      color: '#1ca9c9',
    },
    {
      name: 'Pakistan green',
      color: '#006600',
    },
    {
      name: 'Palatinate blue',
      color: '#273be2',
    },
    {
      name: 'Palatinate purple',
      color: '#682860',
    },
    {
      name: 'Pale blue',
      color: '#afeeee',
    },
    {
      name: 'Pale brown',
      color: '#987654',
    },
    {
      name: 'Pale cerulean',
      color: '#9bc4e2',
    },
    {
      name: 'Pale chestnut',
      color: '#ddadaf',
    },
    {
      name: 'Pale copper',
      color: '#da8a67',
    },
    {
      name: 'Pale cornflower blue',
      color: '#abcdef',
    },
    {
      name: 'Pale gold',
      color: '#e6be8a',
    },
    {
      name: 'Pale goldenrod',
      color: '#eee8aa',
    },
    {
      name: 'Pale green',
      color: '#98fb98',
    },
    {
      name: 'Pale lavender',
      color: '#dcd0ff',
    },
    {
      name: 'Pale magenta',
      color: '#f984e5',
    },
    {
      name: 'Pale pink',
      color: '#fadadd',
    },
    {
      name: 'Pale red violet',
      color: '#db7093',
    },
    {
      name: 'Pale robin egg blue',
      color: '#96ded1',
    },
    {
      name: 'Pale silver',
      color: '#c9c0bb',
    },
    {
      name: 'Pale spring bud',
      color: '#ecebbd',
    },
    {
      name: 'Pale taupe',
      color: '#bc987e',
    },
    {
      name: 'Pansy purple',
      color: '#78184a',
    },
    {
      name: 'Papaya whip',
      color: '#ffefd5',
    },
    {
      name: 'Pastel blue',
      color: '#aec6cf',
    },
    {
      name: 'Pastel brown',
      color: '#836953',
    },
    {
      name: 'Pastel gray',
      color: '#cfcfc4',
    },
    {
      name: 'Pastel green',
      color: '#77dd77',
    },
    {
      name: 'Pastel magenta',
      color: '#f49ac2',
    },
    {
      name: 'Pastel orange',
      color: '#ffb347',
    },
    {
      name: 'Pastel pink',
      color: '#ffd1dc',
    },
    {
      name: 'Pastel purple',
      color: '#b39eb5',
    },
    {
      name: 'Pastel red',
      color: '#ff6961',
    },
    {
      name: 'Pastel violet',
      color: '#cb99c9',
    },
    {
      name: 'Pastel yellow',
      color: '#fdfd96',
    },
    {
      name: 'Patriarch',
      color: '#800080',
    },
    {
      name: 'Peach',
      color: '#ffe5b4',
    },
    {
      name: 'Peach puff',
      color: '#ffdab9',
    },
    {
      name: 'Peach yellow',
      color: '#fadfad',
    },
    {
      name: 'Pear',
      color: '#d1e231',
    },
    {
      name: 'Pearl',
      color: '#eae0c8',
    },
    {
      name: 'Pearl Aqua',
      color: '#88d8c0',
    },
    {
      name: 'Peridot',
      color: '#e6e200',
    },
    {
      name: 'Persian blue',
      color: '#1c39bb',
    },
    {
      name: 'Persian indigo',
      color: '#32127a',
    },
    {
      name: 'Persian orange',
      color: '#d99058',
    },
    {
      name: 'Persian pink',
      color: '#f77fbe',
    },
    {
      name: 'Persian plum',
      color: '#701c1c',
    },
    {
      name: 'Persian red',
      color: '#cc3333',
    },
    {
      name: 'Persian rose',
      color: '#fe28a2',
    },
    {
      name: 'Phlox',
      color: '#df00ff',
    },
    {
      name: 'Phthalo blue',
      color: '#000f89',
    },
    {
      name: 'Phthalo green',
      color: '#123524',
    },
    {
      name: 'Piggy pink',
      color: '#fddde6',
    },
    {
      name: 'Pine green',
      color: '#01796f',
    },
    {
      name: 'Pink',
      color: '#ffc0cb',
    },
    {
      name: 'Pink Flamingo',
      color: '#fc74fd',
    },
    {
      name: 'Pink Sherbet',
      color: '#f78fa7',
    },
    {
      name: 'Pink pearl',
      color: '#e7accf',
    },
    {
      name: 'Pistachio',
      color: '#93c572',
    },
    {
      name: 'Platinum',
      color: '#e5e4e2',
    },
    {
      name: 'Portland Orange',
      color: '#ff5a36',
    },
    {
      name: 'Powder blue',
      color: '#b0e0e6',
    },
    {
      name: 'Princeton orange',
      color: '#ff8f00',
    },
    {
      name: 'Prussian blue',
      color: '#003153',
    },
    {
      name: 'Puce',
      color: '#cc8899',
    },
    {
      name: 'Pumpkin',
      color: '#ff7518',
    },
    {
      name: 'Purple Heart',
      color: '#69359c',
    },
    {
      name: "Purple Mountain's Majesty",
      color: '#9d81ba',
    },
    {
      name: 'Purple mountain majesty',
      color: '#9678b6',
    },
    {
      name: 'Purple pizzazz',
      color: '#fe4eda',
    },
    {
      name: 'Purple taupe',
      color: '#50404d',
    },
    {
      name: 'Radical Red',
      color: '#ff355e',
    },
    {
      name: 'Raspberry',
      color: '#e30b5d',
    },
    {
      name: 'Raspberry pink',
      color: '#e25098',
    },
    {
      name: 'Raspberry rose',
      color: '#b3446c',
    },
    {
      name: 'Raw Sienna',
      color: '#d68a59',
    },
    {
      name: 'Razzle dazzle rose',
      color: '#ff33cc',
    },
    {
      name: 'Razzmatazz',
      color: '#e3256b',
    },
    {
      name: 'Red',
      color: '#ff0000',
    },
    {
      name: 'Red Orange',
      color: '#ff5349',
    },
    {
      name: 'Rich black',
      color: '#004040',
    },
    {
      name: 'Rich carmine',
      color: '#d70040',
    },
    {
      name: 'Rich electric blue',
      color: '#0892d0',
    },
    {
      name: 'Rich lilac',
      color: '#b666d2',
    },
    {
      name: 'Rich maroon',
      color: '#b03060',
    },
    {
      name: 'Rifle green',
      color: '#414833',
    },
    {
      name: "Robin's Egg Blue",
      color: '#1fcecb',
    },
    {
      name: 'Rose bonbon',
      color: '#f9429e',
    },
    {
      name: 'Rose ebony',
      color: '#674846',
    },
    {
      name: 'Rose gold',
      color: '#b76e79',
    },
    {
      name: 'Rose pink',
      color: '#ff66cc',
    },
    {
      name: 'Rose quartz',
      color: '#aa98a9',
    },
    {
      name: 'Rose taupe',
      color: '#905d5d',
    },
    {
      name: 'Rose vale',
      color: '#ab4e52',
    },
    {
      name: 'Rosewood',
      color: '#65000b',
    },
    {
      name: 'Rosso corsa',
      color: '#d40000',
    },
    {
      name: 'Rosy brown',
      color: '#bc8f8f',
    },
    {
      name: 'Royal azure',
      color: '#0038a8',
    },
    {
      name: 'Royal blue',
      color: '#4169e1',
    },
    {
      name: 'Royal fuchsia',
      color: '#ca2c92',
    },
    {
      name: 'Royal purple',
      color: '#7851a9',
    },
    {
      name: 'Ruby',
      color: '#e0115f',
    },
    {
      name: 'Ruddy',
      color: '#ff0028',
    },
    {
      name: 'Ruddy brown',
      color: '#bb6528',
    },
    {
      name: 'Ruddy pink',
      color: '#e18e96',
    },
    {
      name: 'Rufous',
      color: '#a81c07',
    },
    {
      name: 'Russet',
      color: '#80461b',
    },
    {
      name: 'Rust',
      color: '#b7410e',
    },
    {
      name: 'Sacramento State green',
      color: '#00563f',
    },
    {
      name: 'Saddle brown',
      color: '#8b4513',
    },
    {
      name: 'Safety orange',
      color: '#ff6700',
    },
    {
      name: 'Saffron',
      color: '#f4c430',
    },
    {
      name: 'Saint Patrick Blue',
      color: '#23297a',
    },
    {
      name: 'Salmon',
      color: '#ff8c69',
    },
    {
      name: 'Salmon pink',
      color: '#ff91a4',
    },
    {
      name: 'Sandstorm',
      color: '#ecd540',
    },
    {
      name: 'Sandy brown',
      color: '#f4a460',
    },
    {
      name: 'Sap green',
      color: '#507d2a',
    },
    {
      name: 'Sapphire',
      color: '#0f52ba',
    },
    {
      name: 'Satin sheen gold',
      color: '#cba135',
    },
    {
      name: 'Scarlet',
      color: '#ff2400',
    },
    {
      name: 'School bus yellow',
      color: '#ffd800',
    },
    {
      name: 'Screamin Green',
      color: '#76ff7a',
    },
    {
      name: 'Sea blue',
      color: '#006994',
    },
    {
      name: 'Sea green',
      color: '#2e8b57',
    },
    {
      name: 'Seal brown',
      color: '#321414',
    },
    {
      name: 'Seashell',
      color: '#fff5ee',
    },
    {
      name: 'Selective yellow',
      color: '#ffba00',
    },
    {
      name: 'Sepia',
      color: '#704214',
    },
    {
      name: 'Shadow',
      color: '#8a795d',
    },
    {
      name: 'Shamrock',
      color: '#45cea2',
    },
    {
      name: 'Shamrock green',
      color: '#009e60',
    },
    {
      name: 'Shocking pink',
      color: '#fc0fc0',
    },
    {
      name: 'Sienna',
      color: '#882d17',
    },
    {
      name: 'Silver',
      color: '#c0c0c0',
    },
    {
      name: 'Sinopia',
      color: '#cb410b',
    },
    {
      name: 'Skobeloff',
      color: '#007474',
    },
    {
      name: 'Sky blue',
      color: '#87ceeb',
    },
    {
      name: 'Sky magenta',
      color: '#cf71af',
    },
    {
      name: 'Slate blue',
      color: '#6a5acd',
    },
    {
      name: 'Slate gray',
      color: '#708090',
    },
    {
      name: 'Smokey topaz',
      color: '#933d41',
    },
    {
      name: 'Smoky black',
      color: '#100c08',
    },
    {
      name: 'Snow',
      color: '#fffafa',
    },
    {
      name: 'Spiro Disco Ball',
      color: '#0fc0fc',
    },
    {
      name: 'Spring bud',
      color: '#a7fc00',
    },
    {
      name: 'Steel blue',
      color: '#4682b4',
    },
    {
      name: 'Stormcloud',
      color: '#008080',
    },
    {
      name: 'Straw',
      color: '#e4d96f',
    },
    {
      name: 'Sunglow',
      color: '#ffcc33',
    },
    {
      name: 'Sunset Orange',
      color: '#fd5e53',
    },
    {
      name: 'Tan',
      color: '#d2b48c',
    },
    {
      name: 'Tangelo',
      color: '#f94d00',
    },
    {
      name: 'Tangerine',
      color: '#f28500',
    },
    {
      name: 'Tangerine yellow',
      color: '#ffcc00',
    },
    {
      name: 'Taupe gray',
      color: '#8b8589',
    },
    {
      name: 'Tawny',
      color: '#cd5700',
    },
    {
      name: 'Tea green',
      color: '#d0f0c0',
    },
    {
      name: 'Teal blue',
      color: '#367588',
    },
    {
      name: 'Teal green',
      color: '#006d5b',
    },
    {
      name: 'Terra cotta',
      color: '#e2725b',
    },
    {
      name: 'Thistle',
      color: '#d8bfd8',
    },
    {
      name: 'Thulian pink',
      color: '#de6fa1',
    },
    {
      name: 'Tickle Me Pink',
      color: '#fc89ac',
    },
    {
      name: 'Tiffany Blue',
      color: '#0abab5',
    },
    {
      name: 'Tiger eye',
      color: '#e08d3c',
    },
    {
      name: 'Timberwolf',
      color: '#dbd7d2',
    },
    {
      name: 'Titanium yellow',
      color: '#eee600',
    },
    {
      name: 'Tomato',
      color: '#ff6347',
    },
    {
      name: 'Toolbox',
      color: '#746cc0',
    },
    {
      name: 'Topaz',
      color: '#ffc87c',
    },
    {
      name: 'Tractor red',
      color: '#fd0e35',
    },
    {
      name: 'Tropical rain forest',
      color: '#00755e',
    },
    {
      name: 'True Blue',
      color: '#0073cf',
    },
    {
      name: 'Tufts Blue',
      color: '#417dc1',
    },
    {
      name: 'Tumbleweed',
      color: '#deaa88',
    },
    {
      name: 'Turkish rose',
      color: '#b57281',
    },
    {
      name: 'Turquoise',
      color: '#30d5c8',
    },
    {
      name: 'Turquoise blue',
      color: '#00ffef',
    },
    {
      name: 'Turquoise green',
      color: '#a0d6b4',
    },
    {
      name: 'Tuscan red',
      color: '#66424d',
    },
    {
      name: 'Twilight lavender',
      color: '#8a496b',
    },
    {
      name: 'Tyrian purple',
      color: '#66023c',
    },
    {
      name: 'UA blue',
      color: '#0033aa',
    },
    {
      name: 'UA red',
      color: '#d9004c',
    },
    {
      name: 'UCLA Blue',
      color: '#536895',
    },
    {
      name: 'UCLA Gold',
      color: '#ffb300',
    },
    {
      name: 'UFO Green',
      color: '#3cd070',
    },
    {
      name: 'UP Forest green',
      color: '#014421',
    },
    {
      name: 'UP Maroon',
      color: '#7b1113',
    },
    {
      name: 'Ube',
      color: '#8878c3',
    },
    {
      name: 'Ultra pink',
      color: '#ff6fff',
    },
    {
      name: 'Ultramarine',
      color: '#120a8f',
    },
    {
      name: 'Ultramarine blue',
      color: '#4166f5',
    },
    {
      name: 'Umber',
      color: '#635147',
    },
    {
      name: 'United Nations blue',
      color: '#5b92e5',
    },
    {
      name: 'University of California Gold',
      color: '#b78727',
    },
    {
      name: 'Unmellow Yellow',
      color: '#ffff66',
    },
    {
      name: 'Upsdell red',
      color: '#ae2029',
    },
    {
      name: 'Urobilin',
      color: '#e1ad21',
    },
    {
      name: 'Utah Crimson',
      color: '#d3003f',
    },
    {
      name: 'Vegas gold',
      color: '#c5b358',
    },
    {
      name: 'Venetian red',
      color: '#c80815',
    },
    {
      name: 'Verdigris',
      color: '#43b3ae',
    },
    {
      name: 'Veronica',
      color: '#a020f0',
    },
    {
      name: 'Violet Blue',
      color: '#324ab2',
    },
    {
      name: 'Violet Red',
      color: '#f75394',
    },
    {
      name: 'Viridian',
      color: '#40826d',
    },
    {
      name: 'Vivid auburn',
      color: '#922724',
    },
    {
      name: 'Vivid burgundy',
      color: '#9f1d35',
    },
    {
      name: 'Vivid cerise',
      color: '#da1d81',
    },
    {
      name: 'Vivid tangerine',
      color: '#ffa089',
    },
    {
      name: 'Vivid violet',
      color: '#9f00ff',
    },
    {
      name: 'Warm black',
      color: '#004242',
    },
    {
      name: 'Wenge',
      color: '#645452',
    },
    {
      name: 'Wheat',
      color: '#f5deb3',
    },
    {
      name: 'White',
      color: '#ffffff',
    },
    {
      name: 'White smoke',
      color: '#f5f5f5',
    },
    {
      name: 'Wild Strawberry',
      color: '#ff43a4',
    },
    {
      name: 'Wild Watermelon',
      color: '#fc6c85',
    },
    {
      name: 'Wild blue yonder',
      color: '#a2add0',
    },
    {
      name: 'Wine',
      color: '#722f37',
    },
    {
      name: 'Wisteria',
      color: '#c9a0dc',
    },
    {
      name: 'Xanadu',
      color: '#738678',
    },
    {
      name: 'Yale Blue',
      color: '#0f4d92',
    },
    {
      name: 'Yellow Orange',
      color: '#ffae42',
    },
    {
      name: 'Yellow green',
      color: '#9acd32',
    },
    {
      name: 'Zaffre',
      color: '#0014a8',
    },
    {
      name: 'Zinnwaldite brown',
      color: '#2c1608',
    },
  ];

  getColorName(hex: string): string {
    const normalized = this.normalizeHex(hex);
    if (!normalized) {
      return 'Unknown Color';
    }

    const exactMatch = this.colors.find(
      (c) => c.color.toLowerCase() === normalized.toLowerCase()
    );

    if (exactMatch) {
      return exactMatch.name;
    }

    const targetRgb = this.hexToRgb(normalized);
    if (!targetRgb) {
      return 'Unknown Color';
    }

    let closestColor = this.colors[0];
    let minDistance = Number.MAX_SAFE_INTEGER;

    for (const color of this.colors) {
      const colorRgb = this.hexToRgb(color.color);
      if (!colorRgb) {
        continue;
      }

      const distance = this.getColorDistance(targetRgb, colorRgb);

      if (distance < minDistance) {
        minDistance = distance;
        closestColor = color;
      }
    }

    return closestColor.name;
  }

  private normalizeHex(hex: string): string | null {
    if (!hex) {
      return null;
    }

    let value = hex.trim().replace('#', '');

    if (value.length === 3) {
      value = value
        .split('')
        .map((char) => char + char)
        .join('');
    }

    if (!/^[0-9A-Fa-f]{6}$/.test(value)) {
      return null;
    }

    return `#${value.toUpperCase()}`;
  }

  private hexToRgb(hex: string): { r: number; g: number; b: number } | null {
    const normalized = this.normalizeHex(hex);
    if (!normalized) {
      return null;
    }

    const cleanHex = normalized.replace('#', '');
    const num = parseInt(cleanHex, 16);

    return {
      r: (num >> 16) & 255,
      g: (num >> 8) & 255,
      b: num & 255,
    };
  }

  private getColorDistance(
    color1: { r: number; g: number; b: number },
    color2: { r: number; g: number; b: number }
  ): number {
    return Math.sqrt(
      Math.pow(color1.r - color2.r, 2) +
        Math.pow(color1.g - color2.g, 2) +
        Math.pow(color1.b - color2.b, 2)
    );
  }
}
