# Creating a Dosha Quiz

![dosha homepage](https://user-images.githubusercontent.com/29425781/152994917-3ec80152-d238-4628-83e4-6800e5e6d463.png)

First up I created a design for the dosha quiz in [Figma](https://www.figma.com/file/ZunMd3aIgTKHU4vtnyq3j8/Dosha-Quiz?node-id=0%3A1) and found a [colour scheme](https://coolors.co/d65ba6-c36fdc-383d6e-4b5395-6ccff6) I liked the look of.

I wanted a quiz where when you select an option and it would remember what you've counted and let you know at the end how many of each button you'd selected. From the initial design, I decided to use a next question button rather than a back button. I personally don't feel like you need to go backwards on such a quiz.

# Stumbling blocks

To get the initial design and questions up was relatively straightforward. Where I got stuck was with trying to count how many of each button had been clicked (a, b or c). Whichever had the most clicks was the answer. I reached out to the community for some guidance and was given some direction which helped me figure out how to do this. I filtered the results array and used the length of the filtered array to count the a, b and c's. To work out which was clicked the most I used if statements.

![Dosha Quiz counting code](https://laughing-lamarr-1f3b95.netlify.app/media/dosha-quiz-code.png)

# Future improvements

- I want to create a pie chart with results in to show what percentage of each dosha someone is.
- Add the ability to go back and change your answer.
- A reset button on the results page to try the quiz again.
