module.exports = {
    async dynamicSectionPopulate(modelIdString, whereOptionsObject = {}) {
        return strapi.db.query(modelIdString).findOne(
            {
                where: whereOptionsObject,
                populate: {
                    sections: {
                        populate: {
                            t2hero: {
                                populate: ['image', 'mapsReference']
                            },
                            t1hero: {
                                populate: ['backgroundImage', 'buttonCTA']
                            },
                            rbp: {
                                populate: ['image', 'buttonCTA']
                            },
                            socialRef: true,
                        }
                    }
                },
            }
        );
    }
}