'use strict';

module.exports = {
  up: async (queryInterface) => queryInterface.bulkInsert('phonecode', [
		{
			phonecodeid: 58,
			countryid: 167,
			countrycode: +92  ,
			areacode: null,
			createdon: new Date(),
			createdby: 'nomi775',
			updatedon: new Date(),
			updatedby: 'nomi775'
		},
		{
			phonecodeid: 60,
			countryid: 236,
			countrycode: +234 ,
			areacode: null,
			createdon: new Date(),
			createdby: 'nomi775',
			updatedon: new Date(),
			updatedby: 'nomi775'
		},
		{
			phonecodeid: 61,
			countryid: 236,
			countrycode: +234 ,
			areacode: null,
			createdon: new Date(),
			createdby: 'nomi775',
			updatedon: new Date(),
			updatedby: 'nomi775'
		},
		{
			phonecodeid: 63,
			countryid: 236,
			countrycode: +234 ,
			areacode: null,
			createdon: new Date(),
			createdby: 'nomi775',
			updatedon: new Date(),
			updatedby: 'nomi775'
		},
		{
			phonecodeid: 66,
			countryid: 236,
			countrycode: +234 ,
			areacode: null,
			createdon: new Date(),
			createdby: 'nomi775',
			updatedon: new Date(),
			updatedby: 'nomi775'
		},
		{
			phonecodeid: 39,
			countryid: 167,
			countrycode: +92  ,
			areacode: null,
			createdon: new Date(),
			createdby: 'nomi775',
			updatedon: new Date(),
			updatedby: 'nomi775'
		},
		{
			phonecodeid: 40,
			countryid: 167,
			countrycode: +91  ,
			areacode: null,
			createdon: new Date(),
			createdby: 'nomi775',
			updatedon: new Date(),
			updatedby: 'nomi775'
		},
		{
			phonecodeid: 41,
			countryid: 167,
			countrycode: +93  ,
			areacode: null,
			createdon: new Date(),
			createdby: 'nomi775',
			updatedon: new Date(),
			updatedby: 'nomi775'
		},
		{
			phonecodeid: 42,
			countryid: 167,
			countrycode: +95  ,
			areacode: null,
			createdon: new Date(),
			createdby: 'nomi775',
			updatedon: new Date(),
			updatedby: 'nomi775'
		},
		{
			phonecodeid: 43,
			countryid: 167,
			countrycode: +94  ,
			areacode: null,
			createdon: new Date(),
			createdby: 'nomi775',
			updatedon: new Date(),
			updatedby: 'nomi775'
		},
		{
			phonecodeid: 44,
			countryid: 167,
			countrycode: +96  ,
			areacode: null,
			createdon: new Date(),
			createdby: 'nomi775',
			updatedon: new Date(),
			updatedby: 'nomi775'
		},
		{
			phonecodeid: 47,
			countryid: 167,
			countrycode: +92  ,
			areacode: null,
			createdon: new Date(),
			createdby: 'nomi775',
			updatedon: new Date(),
			updatedby: 'nomi775'
		},
		{
			phonecodeid: 50,
			countryid: 167,
			countrycode: +92  ,
			areacode: null,
			createdon: new Date(),
			createdby: 'nomi775',
			updatedon: new Date(),
			updatedby: 'nomi775'
		},
		{
			phonecodeid: 56,
			countryid: 167,
			countrycode: +92  ,
			areacode: null,
			createdon: new Date(),
			createdby: 'nomi775',
			updatedon: new Date(),
			updatedby: 'nomi775'
		}
  ], {}),
  down: async (queryInterface) => {
    await queryInterface.bulkDelete('phonecode', );
  }
};
