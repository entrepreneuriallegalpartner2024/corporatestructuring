const businessStructures = [
    {
      name: 'Sole Proprietorship',
      owners: ['Only one individual will own and operate the business.'],
      liability: ['Pay the client from my own personal finances and even if the money is not enough, I will sell my assets to raise the money - Personal/ Unlimited Liability'],
      management: 'The business will be managed solely by the owner.',
      makeProfits: 'Yes',
      profitSharing: 'The sole owner will retain all profits.',
      funding: 'Funding will come from personal savings.',
      sellBondsShares: 'No', // Public fundraising not allowed
      majorAdvantage: 'Simplicity and complete control over all business decisions.',
      majorDisadvantage: 'Unlimited personal liability for business debts and obligations.'
    },
    {
      name: 'General Partnership',
      owners: ['More than one individual will own and operate the business.'],
      liability: ['Share the costs with my partners and each of us will put our personal finances together to ensure the debt is fully settled - Joint Personal/ Unlimited Liability'],
      management: 'Management will be distributed equally among the partners.',
      makeProfits: 'Yes',
      profitSharing: 'Profits will be shared equally among multiple owners.',
      funding: 'Funding will come from contributions made by the business partners.',
      sellBondsShares: 'No', // Public fundraising not allowed
      majorAdvantage: 'Shared responsibility and resources among partners.',
      majorDisadvantage: 'Joint personal liability for all partners, which can lead to potential disputes.'
    },
    {
      name: 'Limited Liability Partnership (LLP)',
      owners: ['More than one individual will own and operate the business.'],
      liability: ['Get money from the business account and sell the business assets that we do not need as much until we raise the full amount - Limited Liability'],
      management: 'Management will be distributed equally among the partners.',
      makeProfits: 'Yes',
      profitSharing: 'Profits will be shared according to the agreement between partners.',
      funding: 'Funding will come from contributions made by the business partners.',
      sellBondsShares: 'No', // Public fundraising not allowed
      majorAdvantage: 'Limited liability for each partner, protecting personal assets from business debts.',
      majorDisadvantage: 'Potential complexity in managing and operating the business due to shared responsibility.'
    },
    {
      name: 'Limited Liability Company (LLC)',
      owners: ['Only one individual will own and operate the business.','More than one individual will own and operate the business.'],
      liability: ['Get money from the business account and sell the business assets that we do not need as much until we raise the full amount - Limited Liability'],
      management: 'Management will be distributed among the partners based on specific agreements.',
      makeProfits: 'Yes',
      profitSharing: 'Profits will be shared according to the agreement between owners.',
      funding: 'Funding will come from personal funds or loans.',
      sellBondsShares: 'No', // Public fundraising not allowed
      majorAdvantage: 'Limited liability protection and flexible management structure.',
      majorDisadvantage: 'Potentially higher setup and ongoing compliance costs compared to other structures.'
    },
    {
      name: 'C-Corp',
      owners: ['Only one individual will own and operate the business.','More than one individual will own and operate the business.'],
      liability: ['Get money from the business account and sell the business assets that we do not need as much until we raise the full amount - Limited Liability'],
      management: 'Management will be handled by a board of directors or elected members.',
      makeProfits: 'Yes',
      profitSharing: 'Profits will be distributed based on shares owned by the shareholders.',
      funding: 'Funding will come from the sale of stocks or shares.',
      sellBondsShares: 'Yes', // Public fundraising allowed
      majorAdvantage: 'Ability to raise capital through the sale of shares and limited liability for shareholders.',
      majorDisadvantage: 'Double taxation on corporate income and dividends.'
    },
    {
      name: 'S-Corp',
      owners: ['Only one individual will own and operate the business.','More than one individual will own and operate the business.'],
      liability: ['Get money from the business account and sell the business assets that we do not need as much until we raise the full amount - Limited Liability'],
      management: 'Management will be handled by a board of directors or elected members.',
      makeProfits: 'Yes',
      profitSharing: 'Profits will be distributed based on shares owned by the shareholders.',
      funding: 'Funding will come from the sale of stocks or shares.',
      sellBondsShares: 'Yes', // Public fundraising allowed
      majorAdvantage: 'Avoids double taxation by passing income directly to shareholders.',
      majorDisadvantage: 'Strict operational processes and eligibility requirements.'
    },
    {
      name: 'Cooperative',
      owners: ['More than one individual will own and operate the business.'],
      liability: ['Get money from the business account and sell the business assets that we do not need as much until we raise the full amount - Limited Liability'],
      management: 'Management will be done democratically by all members.',
      makeProfits: 'Yes',
      profitSharing: 'Profits will be distributed based on the usage of services by members.',
      funding: 'Funding will come from members’ contributions and loans.',
      sellBondsShares: 'Yes', // Public fundraising allowed
      majorAdvantage: 'Democratic management and profit distribution based on service usage.',
      majorDisadvantage: 'Potential for slower decision-making due to democratic processes.'
    },
    {
      name: 'NGO',
      owners: ['More than one individual will own and operate the business.'],
      liability: ['Get money from the business account and sell the business assets that we do not need as much until we raise the full amount - Limited Liability'],
      management: 'Management will be handled by a board of directors or elected members.',
      makeProfits: 'No',
      profitSharing: 'No profits raised or distributed. Surplus is reinvested back into the organization.',
      funding: 'Funding will mostly come from donations and grants.',
      sellBondsShares: 'No', // Public fundraising allowed only in terms of donations
      majorAdvantage: 'Exempt from income tax and eligible for grants and donations.',
      majorDisadvantage: 'No profit distribution and reliance on donations and grants for funding.'
    }
  ];
  
  export default businessStructures;
  