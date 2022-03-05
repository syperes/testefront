const { ApolloServer, gql } = require('apollo-server');
const { ApolloServerPluginCacheControl } = require('apollo-server-core');

const typeDefs = gql`

    type User {
        id: Int,
        first_name: String,
        last_name: String,
        email: String,
        gender: String,
        ip_address: String
    }

    type LoggedUser {
        id: Int,
        first_name: String,
        last_name: String,
        email: String,
        gender: String,
        ip_address: String
    }

    type Activity {
        id: Int,
        tag: String,
        title: String,
        status: String,
        time: Int,
        image: String
    }

    type Topic {
        icon: String,
        name: String,
        score: Float,
        scoreDescription: String,
        text: String
    }

    type Post {
        title: String,
        subtitle: String,
        image: String,
        icon: String
    }

    type Skill {
        name: String,
        description: String,
        level: Int
    }

    type Course {
        name: String,
        progress: Int,
        participants: [User],
        topics: [Topic],
        activities: [Activity],
        related_posts: [Post],
        scoreTotal: Int,
        score: Int,
        title: String,
        description: String,
        skills: [Skill],
        developmentSkills: [Skill]        
    }

  type Query {
    course: Course,
    related_posts: [Post],
    topics: [Topic],
    activities: [Activity],
    progress: Int,
    participants: [User],
    loggedUser: LoggedUser,
    scoreTotal: Int,
    score: Int,
    title: String,
    description: String,
    skills: [Skill],
    developmentSkills: [Skill]   
  }
`;

const loggedUser = {
    id: 1,
    first_name: "Flávia",
    last_name: "Silva",
    email: "flavia.silva@wikipedia.org",
    gender: "Female",
    ip_address: "79.171.190.201"
}

const course = {
    name: `Comunicação Eficaz`,
    progress: 25,
    related_posts: [
        {
            title: `What Your Most Vivid Memories Say About You`,
            subtitle: `Even when we believe that we’ve created a happy, ideal life for…`,
            image: `https://i.ibb.co/r2WxNm5/photo.png`,
            icon: `menu_book`
        },
        {
            title: `What Your Most Vivid Memories Say About You`,
            subtitle: `Even when we believe that we’ve created a happy, ideal life for…`,
            image: `https://i.ibb.co/r2WxNm5/photo.png`,
            icon: `play_circle`
        },
        {
            title: `What Your Most Vivid Memories Say About You`,
            subtitle: `Even when we believe that we’ve created a happy, ideal life for…`,
            image: `https://i.ibb.co/r2WxNm5/photo.png`,
            icon: `language`
        }
    ],
    topics: [
        {
            icon: `wb_sunny`,
            name: `Clareza`,
            score: 5.5,
            scoreDescription: "CLAREZA BAIXA",
            text: "Você tem dificuldade de expressar suas ideias e opiniões de forma clara e precisa. Isso acontece porque você geralmente não consegue se manter presente nas conversas, prestando atenção tanto nos seus próprios pensamentos, quanto no que acontece ao seu redor. É comum você se sentir no piloto automático, como se não fosse o dono das suas próprias palavras."
          }, {
            icon: `gps_fixed`,
            name: `Objetividade`,
            score: 4.5,
            scoreDescription: "OBJETIVIDADE BAIXA",
            text: "Você tem dificuldade de expressar suas ideias e opiniões de forma clara e precisa. Isso acontece porque você geralmente não consegue se manter presente nas conversas, prestando atenção tanto nos seus próprios pensamentos, quanto no que acontece ao seu redor. É comum você se sentir no piloto automático, como se não fosse o dono das suas próprias palavras."
          },{
            icon: `handshake`,
            name: `Compreensão`,
            score: 3.5,
            scoreDescription: "COMPREENSÃO BAIXA",
            text: "Você tem dificuldade de expressar suas ideias e opiniões de forma clara e precisa. Isso acontece porque você geralmente não consegue se manter presente nas conversas, prestando atenção tanto nos seus próprios pensamentos, quanto no que acontece ao seu redor. É comum você se sentir no piloto automático, como se não fosse o dono das suas próprias palavras."
        }
    ],
    activities: [
        {
            id: 1,
            tag: `Identificar`,
            title: `Minha comunicação é clara?`,
            status: `complete`,
            time: 2,
            image: `https://i.ibb.co/9vtdFpw/bg-1.png`
        },
        {
            id: 2,
            tag: `Aprender`,
            title: `Comunicação consciente`,
            status: `available`,
            time: 4,
            image: null
        },
        {
            id: 3,
            tag: `Praticar`,
            title: `10 práticas para uma boa comunicação`,
            status: `locked`,
            time: 10,
            image: null
        },
        {
            id: 4 ,
            tag: `Mapear`,
            title: `4 regras da boa comunicação`,
            status: `locked`,
            time: 2,
            image: null
        }
    ],
    participants: [
          {
            id: 1,
            first_name: "Sherman",
            last_name: "Robel",
            email: "srobel0@wikipedia.org",
            gender: "Male",
            ip_address: "79.171.190.201"
          }, {
            id: 2,
            first_name: "Malchy",
            last_name: "Kosiada",
            email: "mkosiada1@odnoklassniki.ru",
            gender: "Non-binary",
            ip_address: "182.62.77.100"
          }, {
            id: 3,
            first_name: "Ruben",
            last_name: "Bergstram",
            email: "rbergstram2@twitter.com",
            gender: "Non-binary",
            ip_address: "47.229.198.22"
          }, {
            id: 4,
            first_name: "Arlana",
            last_name: "Bottelstone",
            email: "abottelstone3@photobucket.com",
            gender: "Male",
            ip_address: "207.166.189.14"
          }, {
            id: 5,
            first_name: "Gerda",
            last_name: "Jefferson",
            email: "gjefferson4@yahoo.co.jp",
            gender: "Female",
            ip_address: "42.85.45.29"
          }, {
            id: 6,
            first_name: "Marcie",
            last_name: "McFarland",
            email: "mmcfarland5@tripod.com",
            gender: "Female",
            ip_address: "247.189.222.159"
          }, {
            id: 7,
            first_name: "Annecorinne",
            last_name: "Ceaplen",
            email: "aceaplen6@istockphoto.com",
            gender: "Female",
            ip_address: "233.204.47.100"
          }, {
            id: 8,
            first_name: "Marley",
            last_name: "Purseglove",
            email: "mpurseglove7@mail.ru",
            gender: "Male",
            ip_address: "61.170.123.95"
          }, {
            id: 9,
            first_name: "Jordon",
            last_name: "Backshaw",
            email: "jbackshaw8@un.org",
            gender: "Male",
            ip_address: "199.133.58.154"
          }, {
            id: 10,
            first_name: "Arielle",
            last_name: "Siddle",
            email: "asiddle9@java.com",
            gender: "Female",
            ip_address: "29.150.151.181"
          }, {
            id: 11,
            first_name: "Kylynn",
            last_name: "Bestwall",
            email: "kbestwalla@dagondesign.com",
            gender: "Male",
            ip_address: "56.98.213.95"
          }, {
            id: 12,
            first_name: "Ravi",
            last_name: "Janata",
            email: "rjanatab@vistaprint.com",
            gender: "Female",
            ip_address: "63.234.119.96"
          }, {
            id: 13,
            first_name: "Barbee",
            last_name: "Stringer",
            email: "bStringerc@usnews.com",
            gender: "Male",
            ip_address: "47.217.237.235"
          }, {
            id: 14,
            first_name: "Clemens",
            last_name: "Elvins",
            email: "celvinsd@elegantthemes.com",
            gender: "Female",
            ip_address: "95.114.58.50"
          }, {
            id: 15,
            first_name: "Tomlin",
            last_name: "Gasson",
            email: "tgassone@google.es",
            gender: "Male",
            ip_address: "137.47.14.169"
          }, {
            id: 16,
            first_name: "Roberta",
            last_name: "Ruusa",
            email: "rruusaf@pcworld.com",
            gender: "Male",
            ip_address: "159.135.243.108"
          }, {
            id: 17,
            first_name: "Wes",
            last_name: "Lorenc",
            email: "wlorencg@yellowbook.com",
            gender: "Male",
            ip_address: "186.176.225.172"
          }, {
            id: 18,
            first_name: "Melinde",
            last_name: "Took",
            email: "mtookh@amazon.co.jp",
            gender: "Female",
            ip_address: "159.197.59.133"
          }, {
            id: 19,
            first_name: "Franklyn",
            last_name: "Hebbs",
            email: "fhebbsi@livejournal.com",
            gender: "Male",
            ip_address: "64.211.215.164"
          }, {
            id: 20,
            first_name: "Cy",
            last_name: "Joubert",
            email: "cjoubertj@netvibes.com",
            gender: "Female",
            ip_address: "234.186.245.178"
          }, {
            id: 21,
            first_name: "Brook",
            last_name: "Simmank",
            email: "bsimmankk@mtv.com",
            gender: "Male",
            ip_address: "248.189.55.111"
          }, {
            id: 22,
            first_name: "Debera",
            last_name: "Phin",
            email: "dphinl@youtu.be",
            gender: "Genderluid",
            ip_address: "58.6.244.229"
          }, {
            id: 23,
            first_name: "Cristine",
            last_name: "Walduck",
            email: "cwalduckm@delicious.com",
            gender: "Female",
            ip_address: "45.55.182.21"
          }
    ],
    scoreTotal: 150,
    score: 150,
    title: "HOJE SUA COMUNICAÇÃO + AINDA NÃO É EFICAZ",
    description: "Você faz parte do grupo de pessoas que ainda podem desenvolver sua comunicação como uma ferramenta poderosa na sua vida social. Você ainda tem certa dificuldade de expressar suas ideias e emoções com clareza e objetividade, adaptar sua fala ao contexto social de cada situação, além de compreender e ser facilmente compreendido pelos outros. Vamos aprender como desenvolver essas habilidades?",
    skills: [
      {
        name: "Objetividade",
        description: "Se expressar de forma objetiva e firme.",
        level: 1
      },
      {
        name: "Compreensão",
        description: "Compreender e ser compreendido de maneira precisa pelas pessoas.",
        level: 2
      }
    ],
    developmentSkills: [
      {
        name: "Clareza",
        description: "Passar o conteúdo da sua mensagem de forma clara  e consciente.",
        level: 1
      }
    ]
}


const resolvers = {
    Query: {
      loggedUser: () => loggedUser,
      course: () => course
    },
  };

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
