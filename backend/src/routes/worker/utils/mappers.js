const { mapFileToResponse } = require('../../file/utils/mappers');

const mapWorkerToResponse = (worker) => ({
  id: worker.id,
  name: worker.name,
  position: worker.position,
  text: worker.text,
  imageFile: worker.imageFile
    ? mapFileToResponse(worker.imageFile)
    : null,
  showOnHomePage: worker.showOnHomePage,
  placeOnHomePage: worker.placeOnHomePage,
  createdAt: worker.createdAt,
  updatedAt: worker.updatedAt,
});

exports.mapWorkerToResponse = mapWorkerToResponse;
