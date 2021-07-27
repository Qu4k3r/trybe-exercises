const defaultPlants = require('./defaultPlants');

let createdPlants = 0;

const waterFrequency = (needsSun = false, origin = 'Brazil', size) => {
  const quantityBySun = needsSun ? size * 0.77 : (size / 2) * 1.33;

  const quantityByOrigin = origin === 'Brazil' ? 8 : 7;

  return quantityBySun + quantityByOrigin;
};

const initPlant = (id, breed, needsSun, origin, specialCare, size) => {
  const newPlant = {
    id,
    breed,
    needsSun,
    origin,
    specialCare: {
      waterFrequency: waterFrequency(needsSun, origin, size),
      ...specialCare,
    },
    size,
  };
  return newPlant;
};

const savePlants = () => {
  const plants = JSON.stringify(defaultPlants);
  localStorage.setItem('plants', plants);
};

const getPlants = () => {
  const plants = JSON.parse(localStorage.getItem('plants'));
  return plants;
};

const getPlantById = (id) => {
  return defaultPlants.filter((plant) => plant.id === id);
};

const removePlantById = (id) => {
  const newPlants = defaultPlants.filter((plant) => plant.id !== id);
  localStorage.setItem('plants', JSON.stringify(newPlants));
};

const getPlantsThatNeedsSunWithId = (id) => {
  const filteredPlants = defaultPlants.filter((plant) => {
    if (plant.needsSun && plant.id === id) {
      if (plant.specialCare.waterFrequency > 2) {
        return plant;
      }
    }
  });
  localStorage.setItem('plants', JSON.stringify(filteredPlants));
  return filteredPlants;
};

const editPlant = (plantId, newPlant) => {
  return defaultPlants.map((plant) => {
    if (plant.id === plantId) {
      return newPlant;
    }
    return plant;
  });
};

const createNewPlant = (plant) => {
  const mappedPlant = initPlant({ ...plant });
  defaultPlants.push(mappedPlant);
  createdPlants++;
  localStorage.setItem('createdPlants', String(createdPlants));
  localStorage.setItem('plants', JSON.stringify(defaultPlants));
  return defaultPlants;
};
