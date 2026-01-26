const products = [
    {
        id: "P001",
        nom: "Maillot Élite Performance",
        image: "images/mbapé.webp",
        description_courte: "Technologie Tissée LUX-FLOW. Maillot ajusté et léger pour une liberté de mouvement totale.",
        description_longue: "Découvrez l'excellence avec le Maillot Élite Performance, conçu pour les athlètes exigeants. Grâce à la technologie LUX-FLOW, ce maillot offre une respirabilité exceptionnelle et une évacuation optimale de la transpiration. Sa coupe ajustée garantit une liberté de mouvement totale, que ce soit sur le terrain ou lors de vos entraînements les plus intensifs. Un design moderne associé à une performance de haut niveau.",
        prix: 28000,
        categorie: "new,sale"
    },
    {
        id: "P002",
        nom: "Maillot Contraste Épure",
        image: "images/haland.webp",
        description_courte: "Design moderne et épuré. Idéal pour une silhouette nette, tissu respirant pour le confort.",
        description_longue: "Le Maillot Contraste Épure redéfinit le style sportif avec son esthétique minimaliste et ses lignes épurées. Fabriqué à partir de tissus techniques haut de gamme, il offre un confort supérieur tout au long de la journée. Les détails de contraste subtils ajoutent une touche d'élégance sans compromettre la fonctionnalité. Parfait pour ceux qui recherchent un look sophistiqué allié à une performance sportive.",
        prix: 26000,
        categorie: "new"
    },
    {
        id: "P003",
        nom: "Maillot Héritage Classique '98",
        image: "images/fcbvintage.webp",
        description_courte: "Réplique soignée d'un classique. Matériaux de qualité pour une sensation de luxe et de nostalgie.",
        description_longue: "Plongez dans l'histoire du football avec le Maillot Héritage Classique '98. Cette réplique méticuleuse capture l'essence du design iconique de la fin des années 90, tout en utilisant des matériaux modernes pour un confort inégalé. Chaque détail, des motifs tissés aux broderies, a été reproduit avec soin pour offrir une pièce de collection qui peut être portée fièrement aujourd'hui. Un must pour tout passionné d'histoire sportive.",
        prix: 18000,
        categorie: "retro"
    },
    {
        id: "P004",
        nom: "T-shirt Entraînement Ergonomique",
        image: "images/bellinghamtshirt.webp",
        description_courte: "Confortable, anti-odeur, coupe pensée pour le mouvement. Votre essentiel pour chaque séance.",
        description_longue: "Optimisez vos sessions d'entraînement avec notre T-shirt Ergonomique. Conçu spécifiquement pour accompagner chaque mouvement de votre corps, il réduit les frottements et maximise le confort. Sa technologie anti-odeur et sa gestion de l'humidité vous gardent au frais et au sec plus longtemps. Que vous soyez à la salle de sport ou en extérieur, ce T-shirt est l'allié indispensable de votre progression athlétique.",
        prix: 10000,
        categorie: "sale"
    },
    {
        id: "P005",
        nom: "Short Performance Pro",
        image: "images/bruno.webp",
        description_courte: "Short technique avec poches zippées. Tissu extensible et respirant pour un maximum de confort.",
        description_longue: "Le Short Performance Pro est l'équilibre parfait entre fonctionnalité et style. Son tissu extensible quadridirectionnel permet une amplitude de mouvement illimitée, tandis que les zones de ventilation découpées au laser assurent une circulation d'air optimale. Les poches zippées discrètes vous permettent de garder vos objets de valeur en sécurité pendant vos exercices. Conçu pour durer, il résiste aux entraînements les plus rigoureux.",
        prix: 12000,
        categorie: "new"
    },
    {
        id: "P006",
        nom: "Veste Zippée Technique",
        image: "images/salah.webp",
        description_courte: "Veste légère et résistante au vent. Parfaite pour vos échauffements et déplacements.",
        description_longue: "Protégez-vous des éléments sans vous alourdir avec la Veste Zippée Technique. Sa membrane légère offre une protection efficace contre le vent tout en restant hautement respirante. Dotée d'une coupe athlétique, elle est idéale pour les échauffements d'avant-match ou pour rester au chaud lors de vos déplacements. Ses finitions soignées et ses fermetures éclair de haute qualité en font une pièce polyvalente de votre garde-robe sportive.",
        prix: 16000,
        categorie: "sale"
    },
    {
        id: "P007",
        nom: "Pantalon Survêtement Elite",
        image: "images/yildiz.webp",
        description_courte: "Coupe ajustée avec fermetures éclair aux chevilles. Confort optimal et style moderne.",
        description_longue: "Alliez confort et élégance avec le Pantalon de Survêtement Elite. Sa coupe fuselée moderne offre une silhouette nette, tandis que le tissu mélangé doux assure une sensation agréable sur la peau. Les fermetures éclair aux chevilles permettent de l'enfiler et de le retirer facilement, même avec des chaussures. Que ce soit pour une séance de récupération ou pour un look décontracté au quotidien, ce pantalon répond à toutes vos attentes.",
        prix: 14000,
        categorie: "new,sale"
    },
    {
        id: "P008",
        nom: "Maillot Rétro Édition 90s",
        image: "images/dembelee.webp",
        description_courte: "Collection heritage inspirée des années 90. Design iconique et qualité premium.",
        description_longue: "Célébrez l'âge d'or du design sportif avec le Maillot Rétro Édition 90s. Inspiré par les motifs audacieux et les couleurs vibrantes de cette décennie mémorable, ce maillot est une véritable déclaration de style. Fabriqué selon des normes de qualité premium, il combine le look nostalgique avec la durabilité moderne. Une pièce forte pour ceux qui aiment se démarquer avec un style authentique et historique.",
        prix: 19000,
        categorie: "retro"
    },
    {
        id: "P009",
        nom: "Kit Complet Performance",
        image: "images/kane.webp",
        description_courte: "Ensemble maillot + short + chaussettes. Économisez 15% sur l'ensemble complet.",
        description_longue: "Obtenez le look professionnel complet avec le Kit Complet Performance. Cet ensemble comprend notre maillot haute performance, le short assorti et une paire de chaussettes techniques. Chaque pièce est coordonnée pour offrir une harmonie visuelle et technique parfaite. En achetant ce kit complet, vous bénéficiez d'un équipement de niveau élite tout en réalisant une économie substantielle. Prêt à entrer sur le terrain dès la sortie de la boîte.",
        prix: 36000,
        categorie: "new"
    },
    {
        id: "P010",
        nom: "Sweat Capuche Premium",
        image: "images/bellingham.webp",
        description_courte: "Molleton doux intérieur. Capuche ajustable et poches kangourou. Confort maximal.",
        description_longue: "Le Sweat à Capuche Premium est le summum du confort décontracté. Son molleton intérieur brossé offre une chaleur et une douceur exceptionnelles, idéales pour les journées fraîches ou après l'effort. Sa capuche ajustable et sa large poche kangourou ajoutent une fonctionnalité pratique. Avec sa coupe structurée et son tissu qui garde sa forme lavage après lavage, c'est l'investissement parfait pour votre confort quotidien.",
        prix: 18000,
        categorie: "new,sale"
    },
    {
        id: "P011",
        nom: "Chaussettes Techniques Pro",
        image: "images/atlenticokits.webp",
        description_courte: "Pack de 3 paires. Compression optimale et zones ventilées. Soutien de la voûte plantaire.",
        description_longue: "Vos pieds méritent le meilleur soutien. Nos Chaussettes Techniques Pro offrent une compression ciblée là où vous en avez le plus besoin. Les zones de rembourrage stratégiques absorbent les chocs, tandis que les mailles ventilées permettent à vos pieds de respirer pendant l'effort. Ce pack de 3 paires vous assure d'être toujours équipé pour vos entraînements de la semaine. Une différence que vous sentirez à chaque pas.",
        prix: 6000,
        categorie: "sale"
    },
    {
        id: "P012",
        nom: "Maillot Collector Édition Spéciale",
        image: "images/manunited.webp",
        description_courte: "Édition limitée numérotée. Livré avec certificat d'authenticité et packaging premium.",
        description_longue: "Possédez une pièce d'exception avec le Maillot Collector Édition Spéciale. Produit en quantité extrêmement limitée, chaque maillot est numéroté individuellement, ce qui en fait une pièce unique au monde. Fabriqué avec des techniques de tissage artisanales et des matériaux de luxe, ce maillot est autant une œuvre d'art qu'un équipement sportif. Livré dans un coffret de présentation premium, c'est le cadeau ultime pour le collectionneur averti.",
        prix: 30000,
        categorie: "new,retro"
    }
];