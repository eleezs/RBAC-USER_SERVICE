const DataTypes = require("sequelize").DataTypes;
const _accessgroup = require("./accessgroup");
const _accessuser = require("./accessuser");
const _address = require("./address");
const _addresstype = require("./addresstype");
const _assessment = require("./assessment");
const _assessmentdocument = require("./assessmentdocument");
const _assessmentflag = require("./assessmentflag");
const _assessmentrating = require("./assessmentrating");
const _assessmentstatus = require("./assessmentstatus");
const _assessmenttask = require("./assessmenttask");
const _assessmenttype = require("./assessmenttype");
const _assessor = require("./assessor");
const _assessoraccomplishment = require("./assessoraccomplishment");
const _assessoraward = require("./assessoraward");
const _assessoremployment = require("./assessoremployment");
const _assessorindustry = require("./assessorindustry");
const _assessorinstitution = require("./assessorinstitution");
const _assessorprofessionalqualification = require("./assessorprofessionalqualification");
const _asset = require("./asset");
const _assetwatchlist = require("./assetwatchlist");
const _authorizationtype = require("./authorizationtype");
const _award = require("./award");
const _bank = require("./bank");
const _bankaccount = require("./bankaccount");
const _bankaccounttype = require("./bankaccounttype");
const _bankcard = require("./bankcard");
const _blogcomment = require("./blogcomment");
const _blogcommentflag = require("./blogcommentflag");
const _blogcommentlike = require("./blogcommentlike");
const _blogcommentreply = require("./blogcommentreply");
const _bloglike = require("./bloglike");
const _blogpost = require("./blogpost");
const _blogpostimage = require("./blogpostimage");
const _blogposttag = require("./blogposttag");
const _blogtag = require("./blogtag");
const _businessphase = require("./businessphase");
const _businessstructure = require("./businessstructure");
const _buyoffer = require("./buyoffer");
const _buyoffertrade = require("./buyoffertrade");
const _cardissuer = require("./cardissuer");
const _city = require("./city");
const _country = require("./country");
const _countrystate = require("./countrystate");
const _currency = require("./currency");
const _dispositionaction = require("./dispositionaction");
const _dispositiontype = require("./dispositiontype");
const _email = require("./email");
const _employee = require("./employee");
const _flagdisposition = require("./flagdisposition");
const _groupmember = require("./groupmember");
const _industry = require("./industry");
const _institution = require("./institution");
const _intellectualtype = require("./intellectualtype");
const _interest = require("./interest");
const _interesttag = require("./interesttag");
const _investmentpaybackperiod = require("./investmentpaybackperiod");
const _investmentrange = require("./investmentrange");
const _investor = require("./investor");
const _investorinstitution = require("./investorinstitution");
const _investorparticipationlevel = require("./investorparticipationlevel");
const _item = require("./item");
const _job = require("./job");
const _kyc = require("./kyc");
const _kycaddress = require("./kycaddress");
const _kycapprovereason = require("./kycapprovereason");
const _kycdocument = require("./kycdocument");
const _kycdocumenttype = require("./kycdocumenttype");
const _kycidentifier = require("./kycidentifier");
const _kycidentifiertype = require("./kycidentifiertype");
const _kycperson = require("./kycperson");
const _kycpersonaddress = require("./kycpersonaddress");
const _kycpersonrole = require("./kycpersonrole");
const _kycrejectionreason = require("./kycrejectionreason");
const _kycreview = require("./kycreview");
const _logreason = require("./logreason");
const _maritalstatustype = require("./maritalstatustype");
const _message = require("./message");
const _messagedocument = require("./messagedocument");
const _messageflag = require("./messageflag");
const _messageparticipant = require("./messageparticipant");
const _messagerecipient = require("./messagerecipient");
const _newslettersubscription = require("./newslettersubscription");
const _notification = require("./notification");
const _notificationrecipient = require("./notificationrecipient");
const _notificationtype = require("./notificationtype");
const _organization = require("./organization");
const _organizationaccomplishment = require("./organizationaccomplishment");
const _organizationaddress = require("./organizationaddress");
const _organizationauthorization = require("./organizationauthorization");
const _organizationavailability = require("./organizationavailability");
const _organizationaward = require("./organizationaward");
const _organizationemail = require("./organizationemail");
const _organizationinvestmentparticipationlevel = require("./organizationinvestmentparticipationlevel");
const _organizationinvestmentsourcetype = require("./organizationinvestmentsourcetype");
const _organizationinvestmentstructuretype = require("./organizationinvestmentstructuretype");
const _organizationinvitation = require("./organizationinvitation");
const _organizationnotableclient = require("./organizationnotableclient");
const _organizationnotableproject = require("./organizationnotableproject");
const _organizationphone = require("./organizationphone");
const _organizationserviceoffering = require("./organizationserviceoffering");
const _organizationserviceofferingtype = require("./organizationserviceofferingtype");
const _organizationtype = require("./organizationtype");
const _organizationuser = require("./organizationuser");
const _organizationuserroletype = require("./organizationuserroletype");
const _person = require("./person");
const _personaddress = require("./personaddress");
const _personemail = require("./personemail");
const _personinterest = require("./personinterest");
const _personphone = require("./personphone");
const _phonecode = require("./phonecode");
const _phonenumber = require("./phonenumber");
const _physicallocation = require("./physicallocation");
const _pitch = require("./pitch");
const _pitchbid = require("./pitchbid");
const _pitchbidresponse = require("./pitchbidresponse");
const _pitchbidresponsetype = require("./pitchbidresponsetype");
const _pitchdeck = require("./pitchdeck");
const _pitchdeckcashflow = require("./pitchdeckcashflow");
const _pitchdocument = require("./pitchdocument");
const _pitcher = require("./pitcher");
const _pitchimage = require("./pitchimage");
const _pitchinformationrequest = require("./pitchinformationrequest");
const _pitchinformationrequestdocument = require("./pitchinformationrequestdocument");
const _pitchinformationrequestresponse = require("./pitchinformationrequestresponse");
const _pitchinformationrequestresponsetype = require("./pitchinformationrequestresponsetype");
const _pitchpitchtag = require("./pitchpitchtag");
const _pitchreview = require("./pitchreview");
const _pitchsession = require("./pitchsession");
const _pitchsessiondocument = require("./pitchsessiondocument");
const _pitchsessioninterest = require("./pitchsessioninterest");
const _pitchsessionlocation = require("./pitchsessionlocation");
const _pitchsessionparticipant = require("./pitchsessionparticipant");
const _pitchsessionresponse = require("./pitchsessionresponse");
const _pitchstake = require("./pitchstake");
const _pitchstatus = require("./pitchstatus");
const _pitchtag = require("./pitchtag");
const _pitchview = require("./pitchview");
const _portfolio = require("./portfolio");
const _price = require("./price");
const _professionalqualification = require("./professionalqualification");
const _project = require("./project");
const _projectaudit = require("./projectaudit");
const _projectbid = require("./projectbid");
const _projectbidresponse = require("./projectbidresponse");
const _projectbidresponsetype = require("./projectbidresponsetype");
const _projectfundswithdrawal = require("./projectfundswithdrawal");
const _projectfundswithdrawalvote = require("./projectfundswithdrawalvote");
const _projectinvestorreport = require("./projectinvestorreport");
const _projectinvestorreportlike = require("./projectinvestorreportlike");
const _projectmilestone = require("./projectmilestone");
const _projectmilestonecomment = require("./projectmilestonecomment");
const _projectmilestonecommentflag = require("./projectmilestonecommentflag");
const _projectmilestonecommentlike = require("./projectmilestonecommentlike");
const _projectmilestonelike = require("./projectmilestonelike");
const _projectmotion = require("./projectmotion");
const _projectmotionresponse = require("./projectmotionresponse");
const _projectstake = require("./projectstake");
const _projectstatus = require("./projectstatus");
const _recoveryquestion = require("./recoveryquestion");
const _resource = require("./resource");
const _resourceauthorization = require("./resourceauthorization");
const _responsetype = require("./responsetype");
const _reviewcategory = require("./reviewcategory");
const _reviewcomment = require("./reviewcomment");
const _reviewcommentflag = require("./reviewcommentflag");
const _reviewcommentlike = require("./reviewcommentlike");
const _reviewcommentreply = require("./reviewcommentreply");
const _reviewfeedback = require("./reviewfeedback");
const _reviewscore = require("./reviewscore");
const _roletype = require("./roletype");
const _saleschannel = require("./saleschannel");
const _selllisting = require("./selllisting");
const _selllistingtrade = require("./selllistingtrade");
const _timewindow = require("./timewindow");
const _trade = require("./trade");
const _transactionauthorization = require("./transactionauthorization");
const _transactionevent = require("./transactionevent");
const _transactionfee = require("./transactionfee");
const _transactionstatustype = require("./transactionstatustype");
const _transactiontype = require("./transactiontype");
const _userfollower = require("./userfollower");
const _userinteresttag = require("./userinteresttag");
const _userlogin = require("./userlogin");
const _userloginhistory = require("./userloginhistory");
const _userrecoveryquestion = require("./userrecoveryquestion");
const _userrole = require("./userrole");
const _usertype = require("./usertype");
const _virtuallocation = require("./virtuallocation");
const _wallet = require("./wallet");
const _walletbalanceevent = require("./walletbalanceevent");
const _watchlist = require("./watchlist");

function initModels(sequelize) {
  const accessgroup = _accessgroup(sequelize, DataTypes);
  const accessuser = _accessuser(sequelize, DataTypes);
  const address = _address(sequelize, DataTypes);
  const addresstype = _addresstype(sequelize, DataTypes);
  const assessment = _assessment(sequelize, DataTypes);
  const assessmentdocument = _assessmentdocument(sequelize, DataTypes);
  const assessmentflag = _assessmentflag(sequelize, DataTypes);
  const assessmentrating = _assessmentrating(sequelize, DataTypes);
  const assessmentstatus = _assessmentstatus(sequelize, DataTypes);
  const assessmenttask = _assessmenttask(sequelize, DataTypes);
  const assessmenttype = _assessmenttype(sequelize, DataTypes);
  const assessor = _assessor(sequelize, DataTypes);
  const assessoraccomplishment = _assessoraccomplishment(sequelize, DataTypes);
  const assessoraward = _assessoraward(sequelize, DataTypes);
  const assessoremployment = _assessoremployment(sequelize, DataTypes);
  const assessorindustry = _assessorindustry(sequelize, DataTypes);
  const assessorinstitution = _assessorinstitution(sequelize, DataTypes);
  const assessorprofessionalqualification = _assessorprofessionalqualification(sequelize, DataTypes);
  const asset = _asset(sequelize, DataTypes);
  const assetwatchlist = _assetwatchlist(sequelize, DataTypes);
  const authorizationtype = _authorizationtype(sequelize, DataTypes);
  const award = _award(sequelize, DataTypes);
  const bank = _bank(sequelize, DataTypes);
  const bankaccount = _bankaccount(sequelize, DataTypes);
  const bankaccounttype = _bankaccounttype(sequelize, DataTypes);
  const bankcard = _bankcard(sequelize, DataTypes);
  const blogcomment = _blogcomment(sequelize, DataTypes);
  const blogcommentflag = _blogcommentflag(sequelize, DataTypes);
  const blogcommentlike = _blogcommentlike(sequelize, DataTypes);
  const blogcommentreply = _blogcommentreply(sequelize, DataTypes);
  const bloglike = _bloglike(sequelize, DataTypes);
  const blogpost = _blogpost(sequelize, DataTypes);
  const blogpostimage = _blogpostimage(sequelize, DataTypes);
  const blogposttag = _blogposttag(sequelize, DataTypes);
  const blogtag = _blogtag(sequelize, DataTypes);
  const businessphase = _businessphase(sequelize, DataTypes);
  const businessstructure = _businessstructure(sequelize, DataTypes);
  const buyoffer = _buyoffer(sequelize, DataTypes);
  const buyoffertrade = _buyoffertrade(sequelize, DataTypes);
  const cardissuer = _cardissuer(sequelize, DataTypes);
  const city = _city(sequelize, DataTypes);
  const country = _country(sequelize, DataTypes);
  const countrystate = _countrystate(sequelize, DataTypes);
  const currency = _currency(sequelize, DataTypes);
  const dispositionaction = _dispositionaction(sequelize, DataTypes);
  const dispositiontype = _dispositiontype(sequelize, DataTypes);
  const email = _email(sequelize, DataTypes);
  const employee = _employee(sequelize, DataTypes);
  const flagdisposition = _flagdisposition(sequelize, DataTypes);
  const groupmember = _groupmember(sequelize, DataTypes);
  const industry = _industry(sequelize, DataTypes);
  const institution = _institution(sequelize, DataTypes);
  const intellectualtype = _intellectualtype(sequelize, DataTypes);
  const interest = _interest(sequelize, DataTypes);
  const interesttag = _interesttag(sequelize, DataTypes);
  const investmentpaybackperiod = _investmentpaybackperiod(sequelize, DataTypes);
  const investmentrange = _investmentrange(sequelize, DataTypes);
  const investor = _investor(sequelize, DataTypes);
  const investorinstitution = _investorinstitution(sequelize, DataTypes);
  const investorparticipationlevel = _investorparticipationlevel(sequelize, DataTypes);
  const item = _item(sequelize, DataTypes);
  const job = _job(sequelize, DataTypes);
  const kyc = _kyc(sequelize, DataTypes);
  const kycaddress = _kycaddress(sequelize, DataTypes);
  const kycapprovereason = _kycapprovereason(sequelize, DataTypes);
  const kycdocument = _kycdocument(sequelize, DataTypes);
  const kycdocumenttype = _kycdocumenttype(sequelize, DataTypes);
  const kycidentifier = _kycidentifier(sequelize, DataTypes);
  const kycidentifiertype = _kycidentifiertype(sequelize, DataTypes);
  const kycperson = _kycperson(sequelize, DataTypes);
  const kycpersonaddress = _kycpersonaddress(sequelize, DataTypes);
  const kycpersonrole = _kycpersonrole(sequelize, DataTypes);
  const kycrejectionreason = _kycrejectionreason(sequelize, DataTypes);
  const kycreview = _kycreview(sequelize, DataTypes);
  const logreason = _logreason(sequelize, DataTypes);
  const maritalstatustype = _maritalstatustype(sequelize, DataTypes);
  const message = _message(sequelize, DataTypes);
  const messagedocument = _messagedocument(sequelize, DataTypes);
  const messageflag = _messageflag(sequelize, DataTypes);
  const messageparticipant = _messageparticipant(sequelize, DataTypes);
  const messagerecipient = _messagerecipient(sequelize, DataTypes);
  const newslettersubscription = _newslettersubscription(sequelize, DataTypes);
  const notification = _notification(sequelize, DataTypes);
  const notificationrecipient = _notificationrecipient(sequelize, DataTypes);
  const notificationtype = _notificationtype(sequelize, DataTypes);
  const organization = _organization(sequelize, DataTypes);
  const organizationaccomplishment = _organizationaccomplishment(sequelize, DataTypes);
  const organizationaddress = _organizationaddress(sequelize, DataTypes);
  const organizationauthorization = _organizationauthorization(sequelize, DataTypes);
  const organizationavailability = _organizationavailability(sequelize, DataTypes);
  const organizationaward = _organizationaward(sequelize, DataTypes);
  const organizationemail = _organizationemail(sequelize, DataTypes);
  const organizationinvestmentparticipationlevel = _organizationinvestmentparticipationlevel(sequelize, DataTypes);
  const organizationinvestmentsourcetype = _organizationinvestmentsourcetype(sequelize, DataTypes);
  const organizationinvestmentstructuretype = _organizationinvestmentstructuretype(sequelize, DataTypes);
  const organizationinvitation = _organizationinvitation(sequelize, DataTypes);
  const organizationnotableclient = _organizationnotableclient(sequelize, DataTypes);
  const organizationnotableproject = _organizationnotableproject(sequelize, DataTypes);
  const organizationphone = _organizationphone(sequelize, DataTypes);
  const organizationserviceoffering = _organizationserviceoffering(sequelize, DataTypes);
  const organizationserviceofferingtype = _organizationserviceofferingtype(sequelize, DataTypes);
  const organizationtype = _organizationtype(sequelize, DataTypes);
  const organizationuser = _organizationuser(sequelize, DataTypes);
  const organizationuserroletype = _organizationuserroletype(sequelize, DataTypes);
  const person = _person(sequelize, DataTypes);
  const personaddress = _personaddress(sequelize, DataTypes);
  const personemail = _personemail(sequelize, DataTypes);
  const personinterest = _personinterest(sequelize, DataTypes);
  const personphone = _personphone(sequelize, DataTypes);
  const phonecode = _phonecode(sequelize, DataTypes);
  const phonenumber = _phonenumber(sequelize, DataTypes);
  const physicallocation = _physicallocation(sequelize, DataTypes);
  const pitch = _pitch(sequelize, DataTypes);
  const pitchbid = _pitchbid(sequelize, DataTypes);
  const pitchbidresponse = _pitchbidresponse(sequelize, DataTypes);
  const pitchbidresponsetype = _pitchbidresponsetype(sequelize, DataTypes);
  const pitchdeck = _pitchdeck(sequelize, DataTypes);
  const pitchdeckcashflow = _pitchdeckcashflow(sequelize, DataTypes);
  const pitchdocument = _pitchdocument(sequelize, DataTypes);
  const pitcher = _pitcher(sequelize, DataTypes);
  const pitchimage = _pitchimage(sequelize, DataTypes);
  const pitchinformationrequest = _pitchinformationrequest(sequelize, DataTypes);
  const pitchinformationrequestdocument = _pitchinformationrequestdocument(sequelize, DataTypes);
  const pitchinformationrequestresponse = _pitchinformationrequestresponse(sequelize, DataTypes);
  const pitchinformationrequestresponsetype = _pitchinformationrequestresponsetype(sequelize, DataTypes);
  const pitchpitchtag = _pitchpitchtag(sequelize, DataTypes);
  const pitchreview = _pitchreview(sequelize, DataTypes);
  const pitchsession = _pitchsession(sequelize, DataTypes);
  const pitchsessiondocument = _pitchsessiondocument(sequelize, DataTypes);
  const pitchsessioninterest = _pitchsessioninterest(sequelize, DataTypes);
  const pitchsessionlocation = _pitchsessionlocation(sequelize, DataTypes);
  const pitchsessionparticipant = _pitchsessionparticipant(sequelize, DataTypes);
  const pitchsessionresponse = _pitchsessionresponse(sequelize, DataTypes);
  const pitchstake = _pitchstake(sequelize, DataTypes);
  const pitchstatus = _pitchstatus(sequelize, DataTypes);
  const pitchtag = _pitchtag(sequelize, DataTypes);
  const pitchview = _pitchview(sequelize, DataTypes);
  const portfolio = _portfolio(sequelize, DataTypes);
  const price = _price(sequelize, DataTypes);
  const professionalqualification = _professionalqualification(sequelize, DataTypes);
  const project = _project(sequelize, DataTypes);
  const projectaudit = _projectaudit(sequelize, DataTypes);
  const projectbid = _projectbid(sequelize, DataTypes);
  const projectbidresponse = _projectbidresponse(sequelize, DataTypes);
  const projectbidresponsetype = _projectbidresponsetype(sequelize, DataTypes);
  const projectfundswithdrawal = _projectfundswithdrawal(sequelize, DataTypes);
  const projectfundswithdrawalvote = _projectfundswithdrawalvote(sequelize, DataTypes);
  const projectinvestorreport = _projectinvestorreport(sequelize, DataTypes);
  const projectinvestorreportlike = _projectinvestorreportlike(sequelize, DataTypes);
  const projectmilestone = _projectmilestone(sequelize, DataTypes);
  const projectmilestonecomment = _projectmilestonecomment(sequelize, DataTypes);
  const projectmilestonecommentflag = _projectmilestonecommentflag(sequelize, DataTypes);
  const projectmilestonecommentlike = _projectmilestonecommentlike(sequelize, DataTypes);
  const projectmilestonelike = _projectmilestonelike(sequelize, DataTypes);
  const projectmotion = _projectmotion(sequelize, DataTypes);
  const projectmotionresponse = _projectmotionresponse(sequelize, DataTypes);
  const projectstake = _projectstake(sequelize, DataTypes);
  const projectstatus = _projectstatus(sequelize, DataTypes);
  const recoveryquestion = _recoveryquestion(sequelize, DataTypes);
  const resource = _resource(sequelize, DataTypes);
  const resourceauthorization = _resourceauthorization(sequelize, DataTypes);
  const responsetype = _responsetype(sequelize, DataTypes);
  const reviewcategory = _reviewcategory(sequelize, DataTypes);
  const reviewcomment = _reviewcomment(sequelize, DataTypes);
  const reviewcommentflag = _reviewcommentflag(sequelize, DataTypes);
  const reviewcommentlike = _reviewcommentlike(sequelize, DataTypes);
  const reviewcommentreply = _reviewcommentreply(sequelize, DataTypes);
  const reviewfeedback = _reviewfeedback(sequelize, DataTypes);
  const reviewscore = _reviewscore(sequelize, DataTypes);
  const roletype = _roletype(sequelize, DataTypes);
  const saleschannel = _saleschannel(sequelize, DataTypes);
  const selllisting = _selllisting(sequelize, DataTypes);
  const selllistingtrade = _selllistingtrade(sequelize, DataTypes);
  const timewindow = _timewindow(sequelize, DataTypes);
  const trade = _trade(sequelize, DataTypes);
  const transactionauthorization = _transactionauthorization(sequelize, DataTypes);
  const transactionevent = _transactionevent(sequelize, DataTypes);
  const transactionfee = _transactionfee(sequelize, DataTypes);
  const transactionstatustype = _transactionstatustype(sequelize, DataTypes);
  const transactiontype = _transactiontype(sequelize, DataTypes);
  const userfollower = _userfollower(sequelize, DataTypes);
  const userinteresttag = _userinteresttag(sequelize, DataTypes);
  const userlogin = _userlogin(sequelize, DataTypes);
  const userloginhistory = _userloginhistory(sequelize, DataTypes);
  const userrecoveryquestion = _userrecoveryquestion(sequelize, DataTypes);
  const userrole = _userrole(sequelize, DataTypes);
  const usertype = _usertype(sequelize, DataTypes);
  const virtuallocation = _virtuallocation(sequelize, DataTypes);
  const wallet = _wallet(sequelize, DataTypes);
  const walletbalanceevent = _walletbalanceevent(sequelize, DataTypes);
  const watchlist = _watchlist(sequelize, DataTypes);


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
