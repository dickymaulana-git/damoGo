export const getProfileAction = profile => {
  return {
    type: 'GET_PROFILE',
    payload: profile,
  };
};

export const getSampulAction = sampul => {
  return {
    type: 'GET_SAMPUL',
    payload: sampul,
  };
};

export const getTitleAction = title => {
  return {
    type: 'GET_TITLE',
    payload: title,
  };
};

export const getAlamatAction = alamat => {
  return {
    type: 'GET_ALAMAT',
    payload: alamat,
  };
};

export const getDeskripsiAction = deskripsi => {
  return {
    type: 'GET_DESKRIPSI',
    payload: deskripsi,
  };
};

export const getJabatanAction = jabatan => {
  return {
    type: 'GET_JABATAN',
    payload: jabatan,
  };
};

export const getJamAwalAction = jamawal => {
  return {
    type: 'GET_JAMAWAL',
    payload: jamawal,
  };
};

export const getJamAkhirAction = jamakhir => {
  return {
    type: 'GET_JAMAKHIR',
    payload: jamakhir,
  };
};

export const getJadwalBukaAction = jadwalbuka => dispatch => {
  console.log('action jawdal', jadwalbuka);
  dispatch({
    type: 'REQUEST_JADWALBUKA',
    payload: jadwalbuka,
  });
};
