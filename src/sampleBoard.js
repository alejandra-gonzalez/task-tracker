var sampleBoard = {
    taskLists: [
        {
            title: 'Resources',
            cards: [
                {
                    cardTitle: 'GitHub Tutorial',
                    members: [
                        {
                            name: 'Alexa'
                        }
                    ],
                    description: 'Tutorial on how to use GitHub',
                    comments: [
                        {
                            author: 'Levi',
                            text: 'Very useful, thanks!',
                            date: 'November 30, 2019'
                        }
                    ]
                },
                {
                    cardTitle: 'Waffle Tutorial',
                    members: [
                        {
                            name: 'Levy'
                        }
                    ],
                    description: 'Tutorial on how to use Waffle',
                    comments: [
                        {
                            author: 'Alexa',
                            text: 'great',
                            date: 'November 30, 2019'
                        }
                    ]
                }
            ]
        },
        {
            title: 'Future Tasks',
            cards: [
                {
                    cardTitle: 'CSS for Landing Page',
                    members: [
                        {
                            name: 'Lee'
                        }
                    ],
                    description: 'with nonfunctional links and hardcoded data',
                    comments: [
                        {
                            author: 'Alexa',
                            text: 'Can I do this?',
                            date: 'November 29, 2019'
                        }
                    ]
                }
            ]
        }
    ]
}

export default sampleBoard;