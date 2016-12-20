var welcome = new Vue({
    el: '#welcome',
    data: {
        title: 'Bienvenue sur le site du cs2i !',
        content: "Cette plateforme à pour objectif de créer un réseau cs2i ainsi que de faciliter la recherche d'entreprise."
    }
});

var features = new Vue({
    el: '#features',
    data: {
        title1: 'Mon profil',
        title2: 'Les annonces',
        title3: 'Annuaire cs2i',
        content1: 'Si vous êtes un nouvel ou ancien élève du CS2i, gérez votre profil pour avoir plus de visibilité sur la plateforme.',
        content2: "Il est possible d'accéder aux offres d'emplois et d'apprentissage pour les membres du CS2i. \n\
                   Il est possible de poster des annonces si vous êtes une entreprise en recherche d'apprentis",
        content3: 'Liste des actuels et anciens membres du CS2i. Il est possible de voir en détail le profil de chaque personne ainsi que de lire leur CV.'
    }
});