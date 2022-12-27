var DataTypes = require("sequelize").DataTypes;
var _accessgroup = require("./accessgroup");
var _accessuser = require("./accessuser");
var _address = require("./address");
var _addresstype = require("./addresstype");
var _assessment = require("./assessment");
var _assessmentdocument = require("./assessmentdocument");
var _assessmentflag = require("./assessmentflag");
var _assessmentrating = require("./assessmentrating");
var _assessmentstatus = require("./assessmentstatus");
var _assessmenttask = require("./assessmenttask");
var _assessmenttype = require("./assessmenttype");
var _assessor = require("./assessor");
var _assessoraccomplishment = require("./assessoraccomplishment");
var _assessoraward = require("./assessoraward");
var _assessoremployment = require("./assessoremployment");
var _assessorindustry = require("./assessorindustry");
var _assessorinstitution = require("./assessorinstitution");
var _assessorprofessionalqualification = require("./assessorprofessionalqualification");
var _asset = require("./asset");
var _assetwatchlist = require("./assetwatchlist");
var _authorizationtype = require("./authorizationtype");
var _award = require("./award");
var _bank = require("./bank");
var _bankaccount = require("./bankaccount");
var _bankaccounttype = require("./bankaccounttype");
var _bankcard = require("./bankcard");
var _blogcomment = require("./blogcomment");
var _blogcommentflag = require("./blogcommentflag");
var _blogcommentlike = require("./blogcommentlike");
var _blogcommentreply = require("./blogcommentreply");
var _bloglike = require("./bloglike");
var _blogpost = require("./blogpost");
var _blogpostimage = require("./blogpostimage");
var _blogposttag = require("./blogposttag");
var _blogtag = require("./blogtag");
var _businessphase = require("./businessphase");
var _businessstructure = require("./businessstructure");
var _buyoffer = require("./buyoffer");
var _buyoffertrade = require("./buyoffertrade");
var _cardissuer = require("./cardissuer");
var _city = require("./city");
var _country = require("./country");
var _countrystate = require("./countrystate");
var _currency = require("./currency");
var _dispositionaction = require("./dispositionaction");
var _dispositiontype = require("./dispositiontype");
var _email = require("./email");
var _employee = require("./employee");
var _flagdisposition = require("./flagdisposition");
var _groupmember = require("./groupmember");
var _industry = require("./industry");
var _institution = require("./institution");
var _intellectualtype = require("./intellectualtype");
var _interest = require("./interest");
var _interesttag = require("./interesttag");
var _investmentpaybackperiod = require("./investmentpaybackperiod");
var _investmentrange = require("./investmentrange");
var _investor = require("./investor");
var _investorinstitution = require("./investorinstitution");
var _investorparticipationlevel = require("./investorparticipationlevel");
var _item = require("./item");
var _job = require("./job");
var _kyc = require("./kyc");
var _kycaddress = require("./kycaddress");
var _kycapprovereason = require("./kycapprovereason");
var _kycdocument = require("./kycdocument");
var _kycdocumenttype = require("./kycdocumenttype");
var _kycidentifier = require("./kycidentifier");
var _kycidentifiertype = require("./kycidentifiertype");
var _kycperson = require("./kycperson");
var _kycpersonaddress = require("./kycpersonaddress");
var _kycpersonrole = require("./kycpersonrole");
var _kycrejectionreason = require("./kycrejectionreason");
var _kycreview = require("./kycreview");
var _logreason = require("./logreason");
var _maritalstatustype = require("./maritalstatustype");
var _message = require("./message");
var _messagedocument = require("./messagedocument");
var _messageflag = require("./messageflag");
var _messageparticipant = require("./messageparticipant");
var _messagerecipient = require("./messagerecipient");
var _newslettersubscription = require("./newslettersubscription");
var _notification = require("./notification");
var _notificationrecipient = require("./notificationrecipient");
var _notificationtype = require("./notificationtype");
var _organization = require("./organization");
var _organizationaccomplishment = require("./organizationaccomplishment");
var _organizationaddress = require("./organizationaddress");
var _organizationauthorization = require("./organizationauthorization");
var _organizationavailability = require("./organizationavailability");
var _organizationaward = require("./organizationaward");
var _organizationemail = require("./organizationemail");
var _organizationinvestmentparticipationlevel = require("./organizationinvestmentparticipationlevel");
var _organizationinvestmentsourcetype = require("./organizationinvestmentsourcetype");
var _organizationinvestmentstructuretype = require("./organizationinvestmentstructuretype");
var _organizationinvitation = require("./organizationinvitation");
var _organizationnotableclient = require("./organizationnotableclient");
var _organizationnotableproject = require("./organizationnotableproject");
var _organizationphone = require("./organizationphone");
var _organizationserviceoffering = require("./organizationserviceoffering");
var _organizationserviceofferingtype = require("./organizationserviceofferingtype");
var _organizationtype = require("./organizationtype");
var _organizationuser = require("./organizationuser");
var _organizationuserroletype = require("./organizationuserroletype");
var _person = require("./person");
var _personaddress = require("./personaddress");
var _personemail = require("./personemail");
var _personinterest = require("./personinterest");
var _personphone = require("./personphone");
var _phonecode = require("./phonecode");
var _phonenumber = require("./phonenumber");
var _physicallocation = require("./physicallocation");
var _pitch = require("./pitch");
var _pitchbid = require("./pitchbid");
var _pitchbidresponse = require("./pitchbidresponse");
var _pitchbidresponsetype = require("./pitchbidresponsetype");
var _pitchdeck = require("./pitchdeck");
var _pitchdeckcashflow = require("./pitchdeckcashflow");
var _pitchdocument = require("./pitchdocument");
var _pitcher = require("./pitcher");
var _pitchimage = require("./pitchimage");
var _pitchinformationrequest = require("./pitchinformationrequest");
var _pitchinformationrequestdocument = require("./pitchinformationrequestdocument");
var _pitchinformationrequestresponse = require("./pitchinformationrequestresponse");
var _pitchinformationrequestresponsetype = require("./pitchinformationrequestresponsetype");
var _pitchpitchtag = require("./pitchpitchtag");
var _pitchreview = require("./pitchreview");
var _pitchsession = require("./pitchsession");
var _pitchsessiondocument = require("./pitchsessiondocument");
var _pitchsessioninterest = require("./pitchsessioninterest");
var _pitchsessionlocation = require("./pitchsessionlocation");
var _pitchsessionparticipant = require("./pitchsessionparticipant");
var _pitchsessionresponse = require("./pitchsessionresponse");
var _pitchstake = require("./pitchstake");
var _pitchstatus = require("./pitchstatus");
var _pitchtag = require("./pitchtag");
var _pitchview = require("./pitchview");
var _portfolio = require("./portfolio");
var _price = require("./price");
var _professionalqualification = require("./professionalqualification");
var _project = require("./project");
var _projectaudit = require("./projectaudit");
var _projectbid = require("./projectbid");
var _projectbidresponse = require("./projectbidresponse");
var _projectbidresponsetype = require("./projectbidresponsetype");
var _projectfundswithdrawal = require("./projectfundswithdrawal");
var _projectfundswithdrawalvote = require("./projectfundswithdrawalvote");
var _projectinvestorreport = require("./projectinvestorreport");
var _projectinvestorreportlike = require("./projectinvestorreportlike");
var _projectmilestone = require("./projectmilestone");
var _projectmilestonecomment = require("./projectmilestonecomment");
var _projectmilestonecommentflag = require("./projectmilestonecommentflag");
var _projectmilestonecommentlike = require("./projectmilestonecommentlike");
var _projectmilestonelike = require("./projectmilestonelike");
var _projectmotion = require("./projectmotion");
var _projectmotionresponse = require("./projectmotionresponse");
var _projectstake = require("./projectstake");
var _projectstatus = require("./projectstatus");
var _recoveryquestion = require("./recoveryquestion");
var _resource = require("./resource");
var _resourceauthorization = require("./resourceauthorization");
var _responsetype = require("./responsetype");
var _reviewcategory = require("./reviewcategory");
var _reviewcomment = require("./reviewcomment");
var _reviewcommentflag = require("./reviewcommentflag");
var _reviewcommentlike = require("./reviewcommentlike");
var _reviewcommentreply = require("./reviewcommentreply");
var _reviewfeedback = require("./reviewfeedback");
var _reviewscore = require("./reviewscore");
var _roletype = require("./roletype");
var _saleschannel = require("./saleschannel");
var _selllisting = require("./selllisting");
var _selllistingtrade = require("./selllistingtrade");
var _timewindow = require("./timewindow");
var _trade = require("./trade");
var _transactionauthorization = require("./transactionauthorization");
var _transactionevent = require("./transactionevent");
var _transactionfee = require("./transactionfee");
var _transactionstatustype = require("./transactionstatustype");
var _transactiontype = require("./transactiontype");
var _userfollower = require("./userfollower");
var _userinteresttag = require("./userinteresttag");
var _userlogin = require("./userlogin");
var _userloginhistory = require("./userloginhistory");
var _userrecoveryquestion = require("./userrecoveryquestion");
var _userrole = require("./userrole");
var _usertype = require("./usertype");
var _virtuallocation = require("./virtuallocation");
var _wallet = require("./wallet");
var _walletbalanceevent = require("./walletbalanceevent");
var _watchlist = require("./watchlist");

function initModels(sequelize) {
  var accessgroup = _accessgroup(sequelize, DataTypes);
  var accessuser = _accessuser(sequelize, DataTypes);
  var address = _address(sequelize, DataTypes);
  var addresstype = _addresstype(sequelize, DataTypes);
  var assessment = _assessment(sequelize, DataTypes);
  var assessmentdocument = _assessmentdocument(sequelize, DataTypes);
  var assessmentflag = _assessmentflag(sequelize, DataTypes);
  var assessmentrating = _assessmentrating(sequelize, DataTypes);
  var assessmentstatus = _assessmentstatus(sequelize, DataTypes);
  var assessmenttask = _assessmenttask(sequelize, DataTypes);
  var assessmenttype = _assessmenttype(sequelize, DataTypes);
  var assessor = _assessor(sequelize, DataTypes);
  var assessoraccomplishment = _assessoraccomplishment(sequelize, DataTypes);
  var assessoraward = _assessoraward(sequelize, DataTypes);
  var assessoremployment = _assessoremployment(sequelize, DataTypes);
  var assessorindustry = _assessorindustry(sequelize, DataTypes);
  var assessorinstitution = _assessorinstitution(sequelize, DataTypes);
  var assessorprofessionalqualification = _assessorprofessionalqualification(sequelize, DataTypes);
  var asset = _asset(sequelize, DataTypes);
  var assetwatchlist = _assetwatchlist(sequelize, DataTypes);
  var authorizationtype = _authorizationtype(sequelize, DataTypes);
  var award = _award(sequelize, DataTypes);
  var bank = _bank(sequelize, DataTypes);
  var bankaccount = _bankaccount(sequelize, DataTypes);
  var bankaccounttype = _bankaccounttype(sequelize, DataTypes);
  var bankcard = _bankcard(sequelize, DataTypes);
  var blogcomment = _blogcomment(sequelize, DataTypes);
  var blogcommentflag = _blogcommentflag(sequelize, DataTypes);
  var blogcommentlike = _blogcommentlike(sequelize, DataTypes);
  var blogcommentreply = _blogcommentreply(sequelize, DataTypes);
  var bloglike = _bloglike(sequelize, DataTypes);
  var blogpost = _blogpost(sequelize, DataTypes);
  var blogpostimage = _blogpostimage(sequelize, DataTypes);
  var blogposttag = _blogposttag(sequelize, DataTypes);
  var blogtag = _blogtag(sequelize, DataTypes);
  var businessphase = _businessphase(sequelize, DataTypes);
  var businessstructure = _businessstructure(sequelize, DataTypes);
  var buyoffer = _buyoffer(sequelize, DataTypes);
  var buyoffertrade = _buyoffertrade(sequelize, DataTypes);
  var cardissuer = _cardissuer(sequelize, DataTypes);
  var city = _city(sequelize, DataTypes);
  var country = _country(sequelize, DataTypes);
  var countrystate = _countrystate(sequelize, DataTypes);
  var currency = _currency(sequelize, DataTypes);
  var dispositionaction = _dispositionaction(sequelize, DataTypes);
  var dispositiontype = _dispositiontype(sequelize, DataTypes);
  var email = _email(sequelize, DataTypes);
  var employee = _employee(sequelize, DataTypes);
  var flagdisposition = _flagdisposition(sequelize, DataTypes);
  var groupmember = _groupmember(sequelize, DataTypes);
  var industry = _industry(sequelize, DataTypes);
  var institution = _institution(sequelize, DataTypes);
  var intellectualtype = _intellectualtype(sequelize, DataTypes);
  var interest = _interest(sequelize, DataTypes);
  var interesttag = _interesttag(sequelize, DataTypes);
  var investmentpaybackperiod = _investmentpaybackperiod(sequelize, DataTypes);
  var investmentrange = _investmentrange(sequelize, DataTypes);
  var investor = _investor(sequelize, DataTypes);
  var investorinstitution = _investorinstitution(sequelize, DataTypes);
  var investorparticipationlevel = _investorparticipationlevel(sequelize, DataTypes);
  var item = _item(sequelize, DataTypes);
  var job = _job(sequelize, DataTypes);
  var kyc = _kyc(sequelize, DataTypes);
  var kycaddress = _kycaddress(sequelize, DataTypes);
  var kycapprovereason = _kycapprovereason(sequelize, DataTypes);
  var kycdocument = _kycdocument(sequelize, DataTypes);
  var kycdocumenttype = _kycdocumenttype(sequelize, DataTypes);
  var kycidentifier = _kycidentifier(sequelize, DataTypes);
  var kycidentifiertype = _kycidentifiertype(sequelize, DataTypes);
  var kycperson = _kycperson(sequelize, DataTypes);
  var kycpersonaddress = _kycpersonaddress(sequelize, DataTypes);
  var kycpersonrole = _kycpersonrole(sequelize, DataTypes);
  var kycrejectionreason = _kycrejectionreason(sequelize, DataTypes);
  var kycreview = _kycreview(sequelize, DataTypes);
  var logreason = _logreason(sequelize, DataTypes);
  var maritalstatustype = _maritalstatustype(sequelize, DataTypes);
  var message = _message(sequelize, DataTypes);
  var messagedocument = _messagedocument(sequelize, DataTypes);
  var messageflag = _messageflag(sequelize, DataTypes);
  var messageparticipant = _messageparticipant(sequelize, DataTypes);
  var messagerecipient = _messagerecipient(sequelize, DataTypes);
  var newslettersubscription = _newslettersubscription(sequelize, DataTypes);
  var notification = _notification(sequelize, DataTypes);
  var notificationrecipient = _notificationrecipient(sequelize, DataTypes);
  var notificationtype = _notificationtype(sequelize, DataTypes);
  var organization = _organization(sequelize, DataTypes);
  var organizationaccomplishment = _organizationaccomplishment(sequelize, DataTypes);
  var organizationaddress = _organizationaddress(sequelize, DataTypes);
  var organizationauthorization = _organizationauthorization(sequelize, DataTypes);
  var organizationavailability = _organizationavailability(sequelize, DataTypes);
  var organizationaward = _organizationaward(sequelize, DataTypes);
  var organizationemail = _organizationemail(sequelize, DataTypes);
  var organizationinvestmentparticipationlevel = _organizationinvestmentparticipationlevel(sequelize, DataTypes);
  var organizationinvestmentsourcetype = _organizationinvestmentsourcetype(sequelize, DataTypes);
  var organizationinvestmentstructuretype = _organizationinvestmentstructuretype(sequelize, DataTypes);
  var organizationinvitation = _organizationinvitation(sequelize, DataTypes);
  var organizationnotableclient = _organizationnotableclient(sequelize, DataTypes);
  var organizationnotableproject = _organizationnotableproject(sequelize, DataTypes);
  var organizationphone = _organizationphone(sequelize, DataTypes);
  var organizationserviceoffering = _organizationserviceoffering(sequelize, DataTypes);
  var organizationserviceofferingtype = _organizationserviceofferingtype(sequelize, DataTypes);
  var organizationtype = _organizationtype(sequelize, DataTypes);
  var organizationuser = _organizationuser(sequelize, DataTypes);
  var organizationuserroletype = _organizationuserroletype(sequelize, DataTypes);
  var person = _person(sequelize, DataTypes);
  var personaddress = _personaddress(sequelize, DataTypes);
  var personemail = _personemail(sequelize, DataTypes);
  var personinterest = _personinterest(sequelize, DataTypes);
  var personphone = _personphone(sequelize, DataTypes);
  var phonecode = _phonecode(sequelize, DataTypes);
  var phonenumber = _phonenumber(sequelize, DataTypes);
  var physicallocation = _physicallocation(sequelize, DataTypes);
  var pitch = _pitch(sequelize, DataTypes);
  var pitchbid = _pitchbid(sequelize, DataTypes);
  var pitchbidresponse = _pitchbidresponse(sequelize, DataTypes);
  var pitchbidresponsetype = _pitchbidresponsetype(sequelize, DataTypes);
  var pitchdeck = _pitchdeck(sequelize, DataTypes);
  var pitchdeckcashflow = _pitchdeckcashflow(sequelize, DataTypes);
  var pitchdocument = _pitchdocument(sequelize, DataTypes);
  var pitcher = _pitcher(sequelize, DataTypes);
  var pitchimage = _pitchimage(sequelize, DataTypes);
  var pitchinformationrequest = _pitchinformationrequest(sequelize, DataTypes);
  var pitchinformationrequestdocument = _pitchinformationrequestdocument(sequelize, DataTypes);
  var pitchinformationrequestresponse = _pitchinformationrequestresponse(sequelize, DataTypes);
  var pitchinformationrequestresponsetype = _pitchinformationrequestresponsetype(sequelize, DataTypes);
  var pitchpitchtag = _pitchpitchtag(sequelize, DataTypes);
  var pitchreview = _pitchreview(sequelize, DataTypes);
  var pitchsession = _pitchsession(sequelize, DataTypes);
  var pitchsessiondocument = _pitchsessiondocument(sequelize, DataTypes);
  var pitchsessioninterest = _pitchsessioninterest(sequelize, DataTypes);
  var pitchsessionlocation = _pitchsessionlocation(sequelize, DataTypes);
  var pitchsessionparticipant = _pitchsessionparticipant(sequelize, DataTypes);
  var pitchsessionresponse = _pitchsessionresponse(sequelize, DataTypes);
  var pitchstake = _pitchstake(sequelize, DataTypes);
  var pitchstatus = _pitchstatus(sequelize, DataTypes);
  var pitchtag = _pitchtag(sequelize, DataTypes);
  var pitchview = _pitchview(sequelize, DataTypes);
  var portfolio = _portfolio(sequelize, DataTypes);
  var price = _price(sequelize, DataTypes);
  var professionalqualification = _professionalqualification(sequelize, DataTypes);
  var project = _project(sequelize, DataTypes);
  var projectaudit = _projectaudit(sequelize, DataTypes);
  var projectbid = _projectbid(sequelize, DataTypes);
  var projectbidresponse = _projectbidresponse(sequelize, DataTypes);
  var projectbidresponsetype = _projectbidresponsetype(sequelize, DataTypes);
  var projectfundswithdrawal = _projectfundswithdrawal(sequelize, DataTypes);
  var projectfundswithdrawalvote = _projectfundswithdrawalvote(sequelize, DataTypes);
  var projectinvestorreport = _projectinvestorreport(sequelize, DataTypes);
  var projectinvestorreportlike = _projectinvestorreportlike(sequelize, DataTypes);
  var projectmilestone = _projectmilestone(sequelize, DataTypes);
  var projectmilestonecomment = _projectmilestonecomment(sequelize, DataTypes);
  var projectmilestonecommentflag = _projectmilestonecommentflag(sequelize, DataTypes);
  var projectmilestonecommentlike = _projectmilestonecommentlike(sequelize, DataTypes);
  var projectmilestonelike = _projectmilestonelike(sequelize, DataTypes);
  var projectmotion = _projectmotion(sequelize, DataTypes);
  var projectmotionresponse = _projectmotionresponse(sequelize, DataTypes);
  var projectstake = _projectstake(sequelize, DataTypes);
  var projectstatus = _projectstatus(sequelize, DataTypes);
  var recoveryquestion = _recoveryquestion(sequelize, DataTypes);
  var resource = _resource(sequelize, DataTypes);
  var resourceauthorization = _resourceauthorization(sequelize, DataTypes);
  var responsetype = _responsetype(sequelize, DataTypes);
  var reviewcategory = _reviewcategory(sequelize, DataTypes);
  var reviewcomment = _reviewcomment(sequelize, DataTypes);
  var reviewcommentflag = _reviewcommentflag(sequelize, DataTypes);
  var reviewcommentlike = _reviewcommentlike(sequelize, DataTypes);
  var reviewcommentreply = _reviewcommentreply(sequelize, DataTypes);
  var reviewfeedback = _reviewfeedback(sequelize, DataTypes);
  var reviewscore = _reviewscore(sequelize, DataTypes);
  var roletype = _roletype(sequelize, DataTypes);
  var saleschannel = _saleschannel(sequelize, DataTypes);
  var selllisting = _selllisting(sequelize, DataTypes);
  var selllistingtrade = _selllistingtrade(sequelize, DataTypes);
  var timewindow = _timewindow(sequelize, DataTypes);
  var trade = _trade(sequelize, DataTypes);
  var transactionauthorization = _transactionauthorization(sequelize, DataTypes);
  var transactionevent = _transactionevent(sequelize, DataTypes);
  var transactionfee = _transactionfee(sequelize, DataTypes);
  var transactionstatustype = _transactionstatustype(sequelize, DataTypes);
  var transactiontype = _transactiontype(sequelize, DataTypes);
  var userfollower = _userfollower(sequelize, DataTypes);
  var userinteresttag = _userinteresttag(sequelize, DataTypes);
  var userlogin = _userlogin(sequelize, DataTypes);
  var userloginhistory = _userloginhistory(sequelize, DataTypes);
  var userrecoveryquestion = _userrecoveryquestion(sequelize, DataTypes);
  var userrole = _userrole(sequelize, DataTypes);
  var usertype = _usertype(sequelize, DataTypes);
  var virtuallocation = _virtuallocation(sequelize, DataTypes);
  var wallet = _wallet(sequelize, DataTypes);
  var walletbalanceevent = _walletbalanceevent(sequelize, DataTypes);
  var watchlist = _watchlist(sequelize, DataTypes);

  groupmember.belongsTo(accessgroup, { as: "accessgroup", foreignKey: "accessgroupid"});
  accessgroup.hasMany(groupmember, { as: "groupmembers", foreignKey: "accessgroupid"});
  groupmember.belongsTo(accessgroup, { as: "accessuser", foreignKey: "accessuserid"});
  accessgroup.hasMany(groupmember, { as: "accessuser_groupmembers", foreignKey: "accessuserid"});
  userlogin.belongsTo(accessuser, { as: "accessuser", foreignKey: "accessuserid"});
  accessuser.hasMany(userlogin, { as: "userlogins", foreignKey: "accessuserid"});
  resourceauthorization.belongsTo(authorizationtype, { as: "authorizationtype", foreignKey: "authorizationtypeid"});
  authorizationtype.hasMany(resourceauthorization, { as: "resourceauthorizations", foreignKey: "authorizationtypeid"});
  address.belongsTo(city, { as: "city", foreignKey: "cityid"});
  city.hasMany(address, { as: "addresses", foreignKey: "cityid"});
  countrystate.belongsTo(country, { as: "country", foreignKey: "countryid"});
  country.hasMany(countrystate, { as: "countrystates", foreignKey: "countryid"});
  phonecode.belongsTo(country, { as: "country", foreignKey: "countryid"});
  country.hasMany(phonecode, { as: "phonecodes", foreignKey: "countryid"});
  city.belongsTo(countrystate, { as: "countrystate", foreignKey: "countrystateid"});
  countrystate.hasMany(city, { as: "cities", foreignKey: "countrystateid"});
  // personemail.belongsTo(email, { as: "email", foreignKey: "emailid" });
  // personemail.belongsTo(email, { foreignKey: "emailid" });
	// email.belongsTo(personemail, { foreignKey: "emailid" });
  // email.hasMany(personemail, { as: "personemails", foreignKey: "emailid"});
	// email.hasOne(personemail, { foreignKey: 'emailid', targetKey: 'emailid'});
	// personemail.hasMany(email, { foreignKey: 'emailid', sourceKey:'emailid' });
  accessuser.belongsTo(person, { as: "person", foreignKey: "personid", });
  person.hasMany(accessuser, { as: "accessusers", foreignKey: "personid"});
  personaddress.belongsTo(person, { as: "person", foreignKey: "personid"});
  person.hasMany(personaddress, { as: "personaddresses", foreignKey: "personid"});
  personemail.belongsTo(person, { as: "person", foreignKey: "personid"});
  person.hasMany(personemail, { as: "personemails", foreignKey: "personid"});
  phonenumber.belongsTo(phonecode, { as: "phonecode", foreignKey: "phonecodeid"});
  phonecode.hasMany(phonenumber, { as: "phonenumbers", foreignKey: "phonecodeid"});
  resourceauthorization.belongsTo(resource, { as: "resource", foreignKey: "resourceid"});
  resource.hasMany(resourceauthorization, { as: "resourceauthorizations", foreignKey: "resourceid"});

  return {
    accessgroup,
    accessuser,
    address,
    addresstype,
    assessment,
    assessmentdocument,
    assessmentflag,
    assessmentrating,
    assessmentstatus,
    assessmenttask,
    assessmenttype,
    assessor,
    assessoraccomplishment,
    assessoraward,
    assessoremployment,
    assessorindustry,
    assessorinstitution,
    assessorprofessionalqualification,
    asset,
    assetwatchlist,
    authorizationtype,
    award,
    bank,
    bankaccount,
    bankaccounttype,
    bankcard,
    blogcomment,
    blogcommentflag,
    blogcommentlike,
    blogcommentreply,
    bloglike,
    blogpost,
    blogpostimage,
    blogposttag,
    blogtag,
    businessphase,
    businessstructure,
    buyoffer,
    buyoffertrade,
    cardissuer,
    city,
    country,
    countrystate,
    currency,
    dispositionaction,
    dispositiontype,
    email,
    employee,
    flagdisposition,
    groupmember,
    industry,
    institution,
    intellectualtype,
    interest,
    interesttag,
    investmentpaybackperiod,
    investmentrange,
    investor,
    investorinstitution,
    investorparticipationlevel,
    item,
    job,
    kyc,
    kycaddress,
    kycapprovereason,
    kycdocument,
    kycdocumenttype,
    kycidentifier,
    kycidentifiertype,
    kycperson,
    kycpersonaddress,
    kycpersonrole,
    kycrejectionreason,
    kycreview,
    logreason,
    maritalstatustype,
    message,
    messagedocument,
    messageflag,
    messageparticipant,
    messagerecipient,
    newslettersubscription,
    notification,
    notificationrecipient,
    notificationtype,
    organization,
    organizationaccomplishment,
    organizationaddress,
    organizationauthorization,
    organizationavailability,
    organizationaward,
    organizationemail,
    organizationinvestmentparticipationlevel,
    organizationinvestmentsourcetype,
    organizationinvestmentstructuretype,
    organizationinvitation,
    organizationnotableclient,
    organizationnotableproject,
    organizationphone,
    organizationserviceoffering,
    organizationserviceofferingtype,
    organizationtype,
    organizationuser,
    organizationuserroletype,
    person,
    personaddress,
    personemail,
    personinterest,
    personphone,
    phonecode,
    phonenumber,
    physicallocation,
    pitch,
    pitchbid,
    pitchbidresponse,
    pitchbidresponsetype,
    pitchdeck,
    pitchdeckcashflow,
    pitchdocument,
    pitcher,
    pitchimage,
    pitchinformationrequest,
    pitchinformationrequestdocument,
    pitchinformationrequestresponse,
    pitchinformationrequestresponsetype,
    pitchpitchtag,
    pitchreview,
    pitchsession,
    pitchsessiondocument,
    pitchsessioninterest,
    pitchsessionlocation,
    pitchsessionparticipant,
    pitchsessionresponse,
    pitchstake,
    pitchstatus,
    pitchtag,
    pitchview,
    portfolio,
    price,
    professionalqualification,
    project,
    projectaudit,
    projectbid,
    projectbidresponse,
    projectbidresponsetype,
    projectfundswithdrawal,
    projectfundswithdrawalvote,
    projectinvestorreport,
    projectinvestorreportlike,
    projectmilestone,
    projectmilestonecomment,
    projectmilestonecommentflag,
    projectmilestonecommentlike,
    projectmilestonelike,
    projectmotion,
    projectmotionresponse,
    projectstake,
    projectstatus,
    recoveryquestion,
    resource,
    resourceauthorization,
    responsetype,
    reviewcategory,
    reviewcomment,
    reviewcommentflag,
    reviewcommentlike,
    reviewcommentreply,
    reviewfeedback,
    reviewscore,
    roletype,
    saleschannel,
    selllisting,
    selllistingtrade,
    timewindow,
    trade,
    transactionauthorization,
    transactionevent,
    transactionfee,
    transactionstatustype,
    transactiontype,
    userfollower,
    userinteresttag,
    userlogin,
    userloginhistory,
    userrecoveryquestion,
    userrole,
    usertype,
    virtuallocation,
    wallet,
    walletbalanceevent,
    watchlist,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
