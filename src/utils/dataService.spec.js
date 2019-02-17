import * as dataService from './dataService';

jest.mock('../data/users', () => [
  {
    id: '002',
    firstName: 'Bobby',
    lastName: 'Daniels',
    email: 'bobbyD@outlook.com',
    registerDate: '02/09/2013',
    lastLoginDate: '11/11/2014'
  },
  {
    id: '003',
    firstName: 'John',
    lastName: 'Walker',
    email: 'johnnyWalker@blue.com',
    registerDate: '12/09/2012',
    lastLoginDate: '08/02/2010'
  },
  {
    id: '004',
    firstName: 'Eddy',
    lastName: 'Stevens',
    email: 'eStevens@yahoo.com',
    registerDate: '02/01/2013',
    lastLoginDate: '12/01/2015'
  },
  {
    id: '006',
    firstName: 'John',
    lastName: 'James',
    email: 'johnJ@gmail.com',
    registerDate: '22/09/2015',
    lastLoginDate: '16/07/2017'
  },
  {
    id: '007',
    firstName: 'Adam',
    lastName: 'Stevens',
    email: 'adamS@outlook.com',
    registerDate: '02/10/2011',
    lastLoginDate: '01/08/2014'
  },
  {
    id: '009',
    firstName: 'James',
    lastName: 'Harden',
    email: 'jamesH@nba.com',
    registerDate: '02/11/2015',
    lastLoginDate: '16/10/2016'
  },
  {
    id: '010',
    firstName: 'Brandon',
    lastName: 'Stevens',
    email: 'brandonS@gmail.com',
    registerDate: '02/09/2010',
    lastLoginDate: '02/04/2014'
  }
]);

describe('dataService', () => {
  it('should match user\'s firstName, lastName and email', () => {
    const matchingUsers = dataService.searchUser('Jam');
    expect(matchingUsers.map(user => user.id)).toEqual(['006', '009']);
  });
});
