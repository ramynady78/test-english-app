const standardTestQuestions ={
    "reading": [
        {
            "question": "You are lost in a new city. What do you say to ask for help?",
            "answers": ["Where is the nearest restaurant?", "Can you help me find the train station?", "What is your name?", "How old are you?"],
            "correctAnswer": "Can you help me find the train station?"
        },
        {
            "question": "You need help carrying a heavy box. What do you say?",
            "answers": ["Can you help me with this box?", "What is your favorite color?", "Do you like pizza?", "Where do you live?"],
            "correctAnswer": "Can you help me with this box?"
        },
        {
            "question": "You are in a store and can't find what you need. What do you say to the shop assistant?",
            "answers": ["Can you show me where the milk is?", "What time is it?", "How much is this?", "Do you like this store?"],
            "correctAnswer": "Can you show me where the milk is?"
        },
        {
            "question": "You are in a library and can't find a book. What do you say to the librarian?",
            "answers": ["Can you help me find this book?", "What is your favorite book?", "Do you like reading?", "Where is the restroom?"],
            "correctAnswer": "Can you help me find this book?"
        },
        {
            "question": "You are in a restaurant and need a menu. What do you say to the waiter?",
            "answers": ["Can I have the menu, please?", "What is your name?", "Do you like this restaurant?", "Where is the kitchen?"],
            "correctAnswer": "Can I have the menu, please?"
        },
        {
            "question": "You are in a hotel and need extra towels. What do you say to the receptionist?",
            "answers": ["Can I have extra towels, please?", "What is your favorite color?", "Do you like this hotel?", "Where is the pool?"],
            "correctAnswer": "Can I have extra towels, please?"
        },
        {
            "question": "You are in a park and want to know the time. What do you say to a stranger?",
            "answers": ["Excuse me, do you have the time?", "What is your name?", "Do you like this park?", "Where do you live?"],
            "correctAnswer": "Excuse me, do you have the time?"
        },
        {
            "question": "You are in a museum and want to know where the restroom is. What do you say to a staff member?",
            "answers": ["Can you tell me where the restroom is?", "What is your favorite exhibit?", "Do you like this museum?", "Where is the exit?"],
            "correctAnswer": "Can you tell me where the restroom is?"
        },
        {
            "question": "You are in a train station and need to buy a ticket. What do you say to the ticket officer?",
            "answers": ["Can I buy a ticket to London, please?", "What is your name?", "Do you like trains?", "Where is the café?"],
            "correctAnswer": "Can I buy a ticket to London, please?"
        },
        {
            "question": "You are in a hospital and need to find the doctor's office. What do you say to a nurse?",
            "answers": ["Can you tell me where the doctor's office is?", "What is your favorite color?", "Do you like this hospital?", "Where is the cafeteria?"],
            "correctAnswer": "Can you tell me where the doctor's office is?"
        },
        {
            "question": "You are thirsty. What do you say to ask for water?",
            "answers": ["Can I have some water, please?", "What is your favorite drink?", "Do you like water?", "Where is the kitchen?"],
            "correctAnswer": "Can I have some water, please?"
        },
        {
            "question": "You are hungry. What do you say to ask for food?",
            "answers": ["Can I have something to eat, please?", "What is your favorite food?", "Do you like cooking?", "Where is the restaurant?"],
            "correctAnswer": "Can I have something to eat, please?"
        },
        {
            "question": "You are in a meeting and need to leave early. What do you say to your boss?",
            "answers": ["Can I leave early today, please?", "What is your favorite day?", "Do you like meetings?", "Where is the exit?"],
            "correctAnswer": "Can I leave early today, please?"
        },
        {
            "question": "You are in a class and need to go to the restroom. What do you say to your teacher?",
            "answers": ["Can I go to the restroom, please?", "What is your favorite subject?", "Do you like teaching?", "Where is the restroom?"],
            "correctAnswer": "Can I go to the restroom, please?"
        },
        {
            "question": "You are in a café and want to order a coffee. What do you say to the waiter?",
            "answers": ["Can I have a coffee, please?", "What is your favorite drink?", "Do you like coffee?", "Where is the kitchen?"],
            "correctAnswer": "Can I have a coffee, please?"
        },
        {
            "question": "You are in a store and want to try on a shirt. What do you say to the shop assistant?",
            "answers": ["Can I try this shirt on, please?", "What is your favorite color?", "Do you like this shirt?", "Where is the fitting room?"],
            "correctAnswer": "Can I try this shirt on, please?"
        },
        {
            "question": "You are in a library and want to borrow a book. What do you say to the librarian?",
            "answers": ["Can I borrow this book, please?", "What is your favorite book?", "Do you like reading?", "Where is the exit?"],
            "correctAnswer": "Can I borrow this book, please?"
        },
        {
            "question": "You are in a hotel and want to check out. What do you say to the receptionist?",
            "answers": ["Can I check out, please?", "What is your favorite hotel?", "Do you like this hotel?", "Where is the elevator?"],
            "correctAnswer": "Can I check out, please?"
        },
        {
            "question": "You are happy. What do you say to express your happiness?",
            "answers": ["I am so happy today!", "What is your favorite color?", "Do you like happiness?", "Where is the party?"],
            "correctAnswer": "I am so happy today!"
        },
        {
            "question": "You are sad. What do you say to express your sadness?",
            "answers": ["I feel really sad today.", "What is your favorite food?", "Do you like sadness?", "Where is the park?"],
            "correctAnswer": "I feel really sad today."
        },
        {
            "question": "You are angry. What do you say to express your anger?",
            "answers": ["I am really angry right now.", "What is your favorite movie?", "Do you like anger?", "Where is the exit?"],
            "correctAnswer": "I am really angry right now."
        },
        {
            "question": "You are excited. What do you say to express your excitement?",
            "answers": ["I am so excited about this!", "What is your favorite sport?", "Do you like excitement?", "Where is the stadium?"],
            "correctAnswer": "I am so excited about this!"
        },
        {
            "question": "You are tired. What do you say to express your tiredness?",
            "answers": ["I am really tired today.", "What is your favorite activity?", "Do you like resting?", "Where is the bed?"],
            "correctAnswer": "I am really tired today."
        },
        {
            "question": "You are nervous. What do you say to express your nervousness?",
            "answers": ["I feel really nervous about this.", "What is your favorite color?", "Do you like nervousness?", "Where is the exit?"],
            "correctAnswer": "I feel really nervous about this."
        },
        {
            "question": "You are surprised. What do you say to express your surprise?",
            "answers": ["Wow, I am so surprised!", "What is your favorite food?", "Do you like surprises?", "Where is the kitchen?"],
            "correctAnswer": "Wow, I am so surprised!"
        },
        {
            "question": "You are bored. What do you say to express your boredom?",
            "answers": ["I am really bored right now.", "What is your favorite movie?", "Do you like boredom?", "Where is the TV?"],
            "correctAnswer": "I am really bored right now."
        },
        {
            "question": "You are confused. What do you say to express your confusion?",
            "answers": ["I am really confused about this.", "What is your favorite color?", "Do you like confusion?", "Where is the exit?"],
            "correctAnswer": "I am really confused about this."
        },
        {
            "question": "You are grateful. What do you say to express your gratitude?",
            "answers": ["Thank you so much for your help!", "What is your favorite food?", "Do you like gratitude?", "Where is the kitchen?"],
            "correctAnswer": "Thank you so much for your help!"
        },
        {
            "question": "Read the following sentence: 'She has two cats.' How many cats does she have?",
            "answers": ["One", "Two", "Three", "Four"],
            "correctAnswer": "Two"
        },
        {
            "question": "Read the following sentence: 'My sister is a nurse.' What does my sister do?",
            "answers": ["Teacher", "Nanny", "Nurse", "Doctor"],
            "correctAnswer": "Nurse"
        }
    ],

    "listening": [
    {
        "question": "What did Ali decide to do in the sunny morning?",
        "audioSrc": "/standard test listhining/1.mp3",
        "answers": [
            "Go to school",
            "Go to the park", 
            "Stay at home",
            "Go to the store"
        ],
        "correctAnswer": "Go to the park"
    },
    {
        "question": "What did Sara go to the store to buy?",
        "audioSrc": "/standard test listhining/2.mp3",
        "answers": [
            "Fruits", 
            "Candy",  
            "Clothes", 
            "Toys"
        ],
        "correctAnswer": "Candy"
    },
    {
        "question": "Who did Karim visit on Saturday?",
        "audioSrc": "/standard test listhining/3.mp3",
        "answers": [
            "His friend",
            "His teacher",
            "His grandfather",
            "His cousin"
        ],
        "correctAnswer": "His grandfather"
    },
    {
        "question": "What did Leila learn about at school?",
        "audioSrc": "/standard test listhining/4.mp3",
        "answers": [
            "Animals",
            "Colors",
            "Numbers",
            "Shapes"
        ],
        "correctAnswer": "Colors"
    },
    {
        "question": "Where did Youssef and his family go during the summer holiday?",
        "audioSrc": "/standard test listhining/5.mp3",
        "answers": [
            "To the beach",
            "To the mountains",
            "To the city",
            "To the park"
        ],
        "correctAnswer": "To the mountains"
    },
    {
        "question": "What did Mariam love to do at the beach?",
        "audioSrc": "/standard test listhining/6.mp3",
        "answers": [
            "Build sandcastles",
            "Swim in the sea",
            "Collect shells",
            "Sunbathe"
        ],
        "correctAnswer": "Swim in the sea"
    },
    {
        "question": "What was the book about that Ahmad read?",
        "audioSrc": "/standard test listhining/7.mp3",
        "answers": [
            "Animals",
            "Space",
            "History",
            "Sports"
        ],
        "correctAnswer": "Space"
    },
    {
        "question": "How did Fatima feel on Eid day?",
        "audioSrc": "/standard test listhining/8.mp3",
        "answers": [
            "Sad",
            "Angry",
            "Happy",
            "Tired"
        ],
        "correctAnswer": "Happy"
    },
    {
        "question": "What did Sami love to do in the park?",
        "audioSrc": "/standard test listhining/9.mp3",
        "answers": [
            "Play soccer",
            "Watch birds",
            "Ride a bike",
            "Fly a kite"
        ],
        "correctAnswer": "Watch birds"
    },
    {
        "question": "What did the friends do at Ali's house?",
        "audioSrc": "/standard test listhining/10.mp3",
        "answers": [
            "Watched a movie",
            "Played games",
            "Ate dinner",
            "Did homework"
        ],
        "correctAnswer": "Played games"
    },
    {
        "question": "Why was Nada excited?",
        "audioSrc": "/standard test listhining/11.mp3",
        "answers": [
            "To go home",
            "To see her friends",
            "To play alone",
            "To eat lunch"
        ],
        "correctAnswer": "To see her friends"
    },
    {
        "question": "What did Youssef do on the rainy day?",
        "audioSrc": "/standard test listhining/12.mp3",
        "answers": [
            "Went outside",
            "Stayed home",
            "Visited a friend",
            "Went to school"
        ],
        "correctAnswer": "Stayed home"
    },
    {
        "question": "What did Mariam see in the garden?",
        "audioSrc": "/standard test listhining/13.mp3",
        "answers": [
            "Trees",
            "Insects",
            "Birds",
            "Beautiful flowers"
        ],
        "correctAnswer": "Beautiful flowers"
    },
    {
        "question": "Where did Adel and his family go on the weekend?",
        "audioSrc": "/standard test listhining/14.mp3",
        "answers": [
            "To the zoo",
            "To the amusement park",
            "To the beach",
            "To the mountains"
        ],
        "correctAnswer": "To the amusement park"

    },
    {
        "question": "What did Sara learn about in school?",
        "audioSrc": "/standard test listhining/15.mp3",
        "answers": [
            "Plants",
            "Animals",
            "Colors",
            "Numbers"
        ],
        "correctAnswer": "Animals"
    },
    {
        "question": "What did Kareem go to the market to buy?",
        "audioSrc": "/standard test listhining/16.mp3",
        "answers": [
            "Fruits",
            "Vegetables",
            "Snacks",
            "Drinks"
        ],
        "correctAnswer": "Vegetables"
    },
    {
        "question": "What did Leila see in the park",
        "audioSrc": "/standard test listhining/17.mp3",
        "answers": [
            "Animals",
            "Flowers",
            "Her friends",
            "A playground"
        ],
        "correctAnswer": "Her friends"
    },
    {
        "question": "What type of story did Mariam read?",
        "audioSrc": "/standard test listhining/18.mp3",
        "answers": [
            "A sad story",
            "A funny story",
            "An adventure story",
            "A mystery story"
        ],
        "correctAnswer": "An adventure story"
    },
    {
        "question": "Who did the children visit on Eid day?",
        "audioSrc": "/standard test listhining/19.mp3",
        "answers": [
            "Their friends",
            "Their grandparents",
            "Their teachers",
            "Their cousins"
          ],
          "correctAnswer": "Their grandparents"
    },
    {
    "question": "What did Youssef and his family do in the park?",        "audioSrc": "/standard test listhining/20.mp3",
    "answers": [
        "Played football",
        "Went for a walk",
        "Had a picnic",
        "Rode bikes"
    ],
    "correctAnswer": "Played football"
    },
    {
        "question": "What did Fatima enjoy doing at the beach?",
        "audioSrc": "/standard test listhining/21.mp3",
        "answers": [
            "Swimming",
            "Collecting shells",
            "Building sandcastles",
            "Sunbathing"
          ],
          "correctAnswer": "Collecting shells"
        
    },
    {
        "question": "Which season did Youssef love?",
        "audioSrc": "/standard test listhining/22.mp3",
        "answers": [
            "Winter",
            "Summer",
            "Fall",
            "Spring"
        ],
        "correctAnswer": "Spring"
    },
    {
        "question": "What type of movie did Adel watch?",
        "audioSrc": "/standard test listhining/23.mp3",
        "answers": [
            "A scary movie",
            "A funny movie",
            "A sad movie",
            "A documentary"
          ],
          "correctAnswer": "A funny movie"
    },
    {
        "question": "What did Leila see at the amusement park?",
        "audioSrc": "/standard test listhining/24.mp3",
        "answers": [
            "Animals",
            "Many rides",
            "Food stalls",
            "Games"
          ],
          "correctAnswer": "Many rides"
    },
    {
        "question": "What type of book was Kareem looking for?",
        "audioSrc": "/standard test listhining/25.mp3",
        "answers": [
            "A storybook",
            "A sports book",
            "A history book",
            "A science book"
        ],
        "correctAnswer": "A sports book"
    },
    {
        "question": "How did Sara feel on Eid day?",
        "audioSrc": "/standard test listhining/26.mp3",
        "answers": [
            "Sad",
            "Angry",
            "Happy",
            "Tired"
          ],
        "correctAnswer": "Happy"
    },
    {
        "question": "What did Mariam see in the garden?",
        "audioSrc": "/standard test listhining/27.mp3",
        "answers": [
            "A butterfly",
            "A rainbow",
            "A flower",
            "A bird"
          ],
          "correctAnswer": "A rainbow"
    },
    {
        "question": "What did the friends do at Fatima's house?",
        "audioSrc": "/standard test listhining/28.mp3",
        "answers": [
            "Watched TV",
            "Had dinner",
            "Played games",
            "Did homework"
          ],
          "correctAnswer": "Had dinner"
    },
    {
        "question": "What did Nada and her sister do on the way to school?",
        "audioSrc": "/standard test listhining/29.mp3",
        "answers": [
            "Sang a song",
            "Talked to each other",
            "Played a game",
            "Read a book"
          ],
          "correctAnswer": "Talked to each other"
    },
    {
        "question": "What did Ali love to do in the park?",
        "audioSrc": "/standard test listhining/30.mp3",
        "answers": [
            "Play soccer",
            "Watch birds",
            "Ride a bik",
            "Fly a kite"
        ],
        "correctAnswer": "Played on the swings"
    }
    ]
}
export default standardTestQuestions;