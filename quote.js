'use-strict'
const button =  document.querySelector('.button');

const quotes = new Map([
    ['Success is to be measured not so much by the position that one has reached in life as by the obstacles which he has overcome while trying to succeed', 'Booker T. Washington'],
    ['I have discovered in life that there are ways of getting almost anywhere you want to go, if you really want to go', 'Langston Hughes'],
    ['A life is not important except in the impact it has on other lives', 'Jackie Robinson'],
    ['Collaboration, creativity, and respect build life long connections that matter and make a difference, propelling us to work together across all boundaries', 'Diane Luna'],
    ['Stay strong as you live your life story and remember your blessings, no matter what circumstances you face', 'Dr. Damary M. Bonilla-Rodriguez'],
    ['Hold on to your dreams of a better life and stay committed to striving to realize it', 'Earl G. Graves, Sr.'],
    ['If life were predictable it would cease to be life, and be without flavor.', 'Eleanor Roosevelt'],
    ['In order to write about life first you must live it', 'Ernest Hemingway'],
    ['Success usually comes to those who are too busy looking for it', ' Henry David Thoreau'],
    ['The road to success and the road to failure are almost exactly the same', 'Colin R. Davis'],
    ['Success is not final; failure is not fatal: It is the courage to continue that counts.', 'Winston S. Churchill'],
    ['If you are working on something that you really care about, you don\’t have to be pushed. The vision pulls you.', 'Steve Jobs'],
    ['Concentrate all your thoughts upon the work in hand. The sun\'s rays do not burn until brought to a focus.', 'Alexander Graham Bell'],
    ['Either you run the day or the day runs you', ' Jim Rohn'],
    ['I\’m a greater believer in luck, and I find the harder I work the more I have of it', 'Thomas Jefferson'],
    ['When we strive to become better than we are, everything around us becomes better too.', 'Paulo Coelho'],
    ['Opportunity is missed by most people because it is dressed in overalls and looks like work', 'Thomas Edison'],
    ['Setting goals is the first step in turning the invisible into the visible.', 'Tony Robbins'], 
    ['He who conquers himself is the mightiest warrior.', ' Confucius '], 
    ['Try not to become a man of success, but rather become a man of value.', 'Albert Einstein']
]);

  const getQuoteRg =  function (){ 
        const number = Math.trunc(Math.random()*19 + 1);
        const quotesArr = [...quotes]
        const [quote, quoter] = quotesArr[number];
        document.querySelector('.quote').style.opacity = 100;
        document.querySelector('.quoter').style.opacity = 100;
        document.querySelector('.quote').textContent =  (`"${quote}"`);
        document.querySelector('.quoter').textContent = `-${quoter}-`
        
        const fadeOut = function (){
        document.querySelector('.quote').style.opacity = 0;
        document.querySelector('.quoter').style.opacity = 0;
        }
        
        setTimeout(() => fadeOut(), 4000)
    }
   
       
        setInterval(() => getQuoteRg(), 6000)
        


