// utils.js

// Function to handle filtering and recommending business structures
export const recommendStructure = (
    businessStructures,
    intentionToMakeProfits,
    owners,
    liability,
    managementOptions,
    profitSharingOptions,
    funding,
    sellBondsShares
  ) => {
    // Filter business structures based on intention to make profits
    const filteredStructures = businessStructures.filter(s =>
      s.makeProfits === intentionToMakeProfits
    );
  
    // Map each structure to its score
    const scores = filteredStructures.map(s => {
      let score = 0;
  
      // Check if the structure matches the user's inputs
      if (s.owners.includes(owners)) score += 1;
      if (s.liability.includes(liability)) score += 1;
      if (managementOptions[owners]?.includes(s.management)) score += 1;
      if (profitSharingOptions[owners]?.includes(s.profitSharing)) score += 1;
      if (s.funding === funding) score += 1;
      if (s.sellBondsShares === sellBondsShares) score += 1;
  
      return { ...s, score };
    });
  
    // Sort the structures by their score in descending order
    const sortedStructures = scores.sort((a, b) => b.score - a.score);
  
    // Select the best structure
    return sortedStructures[0];
  };
  