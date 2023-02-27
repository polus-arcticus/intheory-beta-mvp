export interface Artwork {
  id: string;
  path: string;
  associatedProject: string;
  associatedProjectId: string;
  fundingAmount: number;
  funder: string;
  txnHash: string;
}

const DUMMY_ARTWORK = [
  {
    id: 'uuid-1',
    path: 'aperture.jpg',
    associatedProject: 'Novel Methods of Tuning Neuroplasticity',
    associatedProjectId: 'uuid-1',
    fundingAmount: 45,
    funder: 'cornperson.eth',
    txnHash:
      '0xe6f2e12c4975b2726726b15cb306d22c730d0a1347f1ab4160a077b06b7ed6f7',
  },
  {
    id: 'uuid-2',
    path: 'cell.jpg',
    associatedProject: 'Novel Methods of Tuning Neuroplasticity',
    associatedProjectId: 'uuid-1',
    fundingAmount: 45,
    funder: 'cornperson.eth',
    txnHash:
      '0xe6f2e12c4975b2726726b15cb306d22c730d0a1347f1ab4160a077b06b7ed6f7',
  },
  {
    id: 'uuid-3',
    path: 'cyber.jpg',
    associatedProject: 'Novel Methods of Tuning Neuroplasticity',
    associatedProjectId: 'uuid-1',
    fundingAmount: 45,
    funder: 'cornperson.eth',
    txnHash:
      '0xe6f2e12c4975b2726726b15cb306d22c730d0a1347f1ab4160a077b06b7ed6f7',
  },
  {
    id: 'uuid-4',
    path: 'flower.jpg',
    associatedProject: 'Novel Methods of Tuning Neuroplasticity',
    associatedProjectId: 'uuid-1',
    fundingAmount: 45,
    funder: 'cornperson.eth',
    txnHash:
      '0xe6f2e12c4975b2726726b15cb306d22c730d0a1347f1ab4160a077b06b7ed6f7',
  },
  {
    id: 'uuid-5',
    path: 'glow.jpg',
    associatedProject: 'Novel Methods of Tuning Neuroplasticity',
    associatedProjectId: 'uuid-1',
    fundingAmount: 45,
    funder: 'cornperson.eth',
    txnHash:
      '0xe6f2e12c4975b2726726b15cb306d22c730d0a1347f1ab4160a077b06b7ed6f7',
  },
  {
    id: 'uuid-6',
    path: 'helix.jpg',
    associatedProject: 'Novel Methods of Tuning Neuroplasticity',
    associatedProjectId: 'uuid-1',
    fundingAmount: 45,
    funder: 'cornperson.eth',
    txnHash:
      '0xe6f2e12c4975b2726726b15cb306d22c730d0a1347f1ab4160a077b06b7ed6f7',
  },
  {
    id: 'uuid-7',
    path: 'ignition.jpg',
    associatedProject: 'Novel Methods of Tuning Neuroplasticity',
    associatedProjectId: 'uuid-1',
    fundingAmount: 45,
    funder: 'cornperson.eth',
    txnHash:
      '0xe6f2e12c4975b2726726b15cb306d22c730d0a1347f1ab4160a077b06b7ed6f7',
  },
  {
    id: 'uuid-8',
    path: 'iso.jpg',
    associatedProject: 'Novel Methods of Tuning Neuroplasticity',
    associatedProjectId: 'uuid-1',
    fundingAmount: 45,
    funder: 'cornperson.eth',
    txnHash:
      '0xe6f2e12c4975b2726726b15cb306d22c730d0a1347f1ab4160a077b06b7ed6f7',
  },
  {
    id: 'uuid-9',
    path: 'lasers.jpg',
    associatedProject: 'Novel Methods of Tuning Neuroplasticity',
    associatedProjectId: 'uuid-1',
    fundingAmount: 45,
    funder: 'cornperson.eth',
    txnHash:
      '0xe6f2e12c4975b2726726b15cb306d22c730d0a1347f1ab4160a077b06b7ed6f7',
  },
  {
    id: 'uuid-10',
    path: 'molecule.jpg',
    associatedProject: 'Novel Methods of Tuning Neuroplasticity',
    associatedProjectId: 'uuid-1',
    fundingAmount: 45,
    funder: 'cornperson.eth',
    txnHash:
      '0xe6f2e12c4975b2726726b15cb306d22c730d0a1347f1ab4160a077b06b7ed6f7',
  },
  {
    id: 'uuid-11',
    path: 'network.jpg',
    associatedProject: 'Novel Methods of Tuning Neuroplasticity',
    associatedProjectId: 'uuid-1',
    fundingAmount: 45,
    funder: 'cornperson.eth',
    txnHash:
      '0xe6f2e12c4975b2726726b15cb306d22c730d0a1347f1ab4160a077b06b7ed6f7',
  },
  {
    id: 'uuid-12',
    path: 'node.jpg',
    associatedProject: 'Novel Methods of Tuning Neuroplasticity',
    associatedProjectId: 'uuid-1',
    fundingAmount: 45,
    funder: 'cornperson.eth',
    txnHash:
      '0xe6f2e12c4975b2726726b15cb306d22c730d0a1347f1ab4160a077b06b7ed6f7',
  },
  {
    id: 'uuid-13',
    path: 'nucleus.jpg',
    associatedProject: 'Novel Methods of Tuning Neuroplasticity',
    associatedProjectId: 'uuid-1',
    fundingAmount: 45,
    funder: 'cornperson.eth',
    txnHash:
      '0xe6f2e12c4975b2726726b15cb306d22c730d0a1347f1ab4160a077b06b7ed6f7',
  },
  {
    id: 'uuid-14',
    path: 'planets.jpg',
    associatedProject: 'Novel Methods of Tuning Neuroplasticity',
    associatedProjectId: 'uuid-1',
    fundingAmount: 45,
    funder: 'cornperson.eth',
    txnHash:
      '0xe6f2e12c4975b2726726b15cb306d22c730d0a1347f1ab4160a077b06b7ed6f7',
  },
  {
    id: 'uuid-15',
    path: 'portal.jpg',
    associatedProject: 'Novel Methods of Tuning Neuroplasticity',
    associatedProjectId: 'uuid-1',
    fundingAmount: 45,
    funder: 'cornperson.eth',
    txnHash:
      '0xe6f2e12c4975b2726726b15cb306d22c730d0a1347f1ab4160a077b06b7ed6f7',
  },
  {
    id: 'uuid-16',
    path: 'surface.jpg',
    associatedProject: 'Novel Methods of Tuning Neuroplasticity',
    associatedProjectId: 'uuid-1',
    fundingAmount: 45,
    funder: 'cornperson.eth',
    txnHash:
      '0xe6f2e12c4975b2726726b15cb306d22c730d0a1347f1ab4160a077b06b7ed6f7',
  },
  {
    id: 'uuid-17',
    path: 'threads.jpg',
    associatedProject: 'Novel Methods of Tuning Neuroplasticity',
    associatedProjectId: 'uuid-1',
    fundingAmount: 45,
    funder: 'cornperson.eth',
    txnHash:
      '0xe6f2e12c4975b2726726b15cb306d22c730d0a1347f1ab4160a077b06b7ed6f7',
  },
  {
    id: 'uuid-18',
    path: 'tron.jpg',
    associatedProject: 'Novel Methods of Tuning Neuroplasticity',
    associatedProjectId: 'uuid-1',
    fundingAmount: 45,
    funder: 'cornperson.eth',
    txnHash:
      '0xe6f2e12c4975b2726726b15cb306d22c730d0a1347f1ab4160a077b06b7ed6f7',
  },
  {
    id: 'uuid-19',
    path: 'aperture.jpg',
    associatedProject: 'Novel Methods of Tuning Neuroplasticity',
    associatedProjectId: 'uuid-1',
    fundingAmount: 45,
    funder: 'cornperson.eth',
    txnHash:
      '0xe6f2e12c4975b2726726b15cb306d22c730d0a1347f1ab4160a077b06b7ed6f7',
  },
  {
    id: 'uuid-20',
    path: 'cell.jpg',
    associatedProject: 'Novel Methods of Tuning Neuroplasticity',
    associatedProjectId: 'uuid-1',
    fundingAmount: 45,
    funder: 'cornperson.eth',
    txnHash:
      '0xe6f2e12c4975b2726726b15cb306d22c730d0a1347f1ab4160a077b06b7ed6f7',
  },
  {
    id: 'uuid-21',
    path: 'cyber.jpg',
    associatedProject: 'Novel Methods of Tuning Neuroplasticity',
    associatedProjectId: 'uuid-1',
    fundingAmount: 45,
    funder: 'cornperson.eth',
    txnHash:
      '0xe6f2e12c4975b2726726b15cb306d22c730d0a1347f1ab4160a077b06b7ed6f7',
  },
  {
    id: 'uuid-22',
    path: 'flower.jpg',
    associatedProject: 'Novel Methods of Tuning Neuroplasticity',
    associatedProjectId: 'uuid-1',
    fundingAmount: 45,
    funder: 'cornperson.eth',
    txnHash:
      '0xe6f2e12c4975b2726726b15cb306d22c730d0a1347f1ab4160a077b06b7ed6f7',
  },
  {
    id: 'uuid-23',
    path: 'glow.jpg',
    associatedProject: 'Novel Methods of Tuning Neuroplasticity',
    associatedProjectId: 'uuid-1',
    fundingAmount: 45,
    funder: 'cornperson.eth',
    txnHash:
      '0xe6f2e12c4975b2726726b15cb306d22c730d0a1347f1ab4160a077b06b7ed6f7',
  },
  {
    id: 'uuid-24',
    path: 'helix.jpg',
    associatedProject: 'Novel Methods of Tuning Neuroplasticity',
    associatedProjectId: 'uuid-1',
    fundingAmount: 45,
    funder: 'cornperson.eth',
    txnHash:
      '0xe6f2e12c4975b2726726b15cb306d22c730d0a1347f1ab4160a077b06b7ed6f7',
  },
  {
    id: 'uuid-25',
    path: 'ignition.jpg',
    associatedProject: 'Novel Methods of Tuning Neuroplasticity',
    associatedProjectId: 'uuid-1',
    fundingAmount: 45,
    funder: 'cornperson.eth',
    txnHash:
      '0xe6f2e12c4975b2726726b15cb306d22c730d0a1347f1ab4160a077b06b7ed6f7',
  },
  {
    id: 'uuid-26',
    path: 'iso.jpg',
    associatedProject: 'Novel Methods of Tuning Neuroplasticity',
    associatedProjectId: 'uuid-1',
    fundingAmount: 45,
    funder: 'cornperson.eth',
    txnHash:
      '0xe6f2e12c4975b2726726b15cb306d22c730d0a1347f1ab4160a077b06b7ed6f7',
  },
  {
    id: 'uuid-27',
    path: 'lasers.jpg',
    associatedProject: 'Novel Methods of Tuning Neuroplasticity',
    associatedProjectId: 'uuid-1',
    fundingAmount: 45,
    funder: 'cornperson.eth',
    txnHash:
      '0xe6f2e12c4975b2726726b15cb306d22c730d0a1347f1ab4160a077b06b7ed6f7',
  },
  {
    id: 'uuid-28',
    path: 'molecule.jpg',
    associatedProject: 'Novel Methods of Tuning Neuroplasticity',
    associatedProjectId: 'uuid-1',
    fundingAmount: 45,
    funder: 'cornperson.eth',
    txnHash:
      '0xe6f2e12c4975b2726726b15cb306d22c730d0a1347f1ab4160a077b06b7ed6f7',
  },
  {
    id: 'uuid-29',
    path: 'network.jpg',
    associatedProject: 'Novel Methods of Tuning Neuroplasticity',
    associatedProjectId: 'uuid-1',
    fundingAmount: 45,
    funder: 'cornperson.eth',
    txnHash:
      '0xe6f2e12c4975b2726726b15cb306d22c730d0a1347f1ab4160a077b06b7ed6f7',
  },
  {
    id: 'uuid-30',
    path: 'node.jpg',
    associatedProject: 'Novel Methods of Tuning Neuroplasticity',
    associatedProjectId: 'uuid-1',
    fundingAmount: 45,
    funder: 'cornperson.eth',
    txnHash:
      '0xe6f2e12c4975b2726726b15cb306d22c730d0a1347f1ab4160a077b06b7ed6f7',
  },
  {
    id: 'uuid-31',
    path: 'nucleus.jpg',
    associatedProject: 'Novel Methods of Tuning Neuroplasticity',
    associatedProjectId: 'uuid-1',
    fundingAmount: 45,
    funder: 'cornperson.eth',
    txnHash:
      '0xe6f2e12c4975b2726726b15cb306d22c730d0a1347f1ab4160a077b06b7ed6f7',
  },
  {
    id: 'uuid-32',
    path: 'planets.jpg',
    associatedProject: 'Novel Methods of Tuning Neuroplasticity',
    associatedProjectId: 'uuid-1',
    fundingAmount: 45,
    funder: 'cornperson.eth',
    txnHash:
      '0xe6f2e12c4975b2726726b15cb306d22c730d0a1347f1ab4160a077b06b7ed6f7',
  },
  {
    id: 'uuid-33',
    path: 'portal.jpg',
    associatedProject: 'Novel Methods of Tuning Neuroplasticity',
    associatedProjectId: 'uuid-1',
    fundingAmount: 45,
    funder: 'cornperson.eth',
    txnHash:
      '0xe6f2e12c4975b2726726b15cb306d22c730d0a1347f1ab4160a077b06b7ed6f7',
  },
  {
    id: 'uuid-34',
    path: 'surface.jpg',
    associatedProject: 'Novel Methods of Tuning Neuroplasticity',
    associatedProjectId: 'uuid-1',
    fundingAmount: 45,
    funder: 'cornperson.eth',
    txnHash:
      '0xe6f2e12c4975b2726726b15cb306d22c730d0a1347f1ab4160a077b06b7ed6f7',
  },
  {
    id: 'uuid-35',
    path: 'threads.jpg',
    associatedProject: 'Novel Methods of Tuning Neuroplasticity',
    associatedProjectId: 'uuid-1',
    fundingAmount: 45,
    funder: 'cornperson.eth',
    txnHash:
      '0xe6f2e12c4975b2726726b15cb306d22c730d0a1347f1ab4160a077b06b7ed6f7',
  },
  {
    id: 'uuid-36',
    path: 'tron.jpg',
    associatedProject: 'Novel Methods of Tuning Neuroplasticity',
    associatedProjectId: 'uuid-1',
    fundingAmount: 45,
    funder: 'cornperson.eth',
    txnHash:
      '0xe6f2e12c4975b2726726b15cb306d22c730d0a1347f1ab4160a077b06b7ed6f7',
  },
  {
    id: 'uuid-37',
    path: 'aperture.jpg',
    associatedProject: 'Novel Methods of Tuning Neuroplasticity',
    associatedProjectId: 'uuid-1',
    fundingAmount: 45,
    funder: 'cornperson.eth',
    txnHash:
      '0xe6f2e12c4975b2726726b15cb306d22c730d0a1347f1ab4160a077b06b7ed6f7',
  },
  {
    id: 'uuid-38',
    path: 'cell.jpg',
    associatedProject: 'Novel Methods of Tuning Neuroplasticity',
    associatedProjectId: 'uuid-1',
    fundingAmount: 45,
    funder: 'cornperson.eth',
    txnHash:
      '0xe6f2e12c4975b2726726b15cb306d22c730d0a1347f1ab4160a077b06b7ed6f7',
  },
  {
    id: 'uuid-39',
    path: 'cyber.jpg',
    associatedProject: 'Novel Methods of Tuning Neuroplasticity',
    associatedProjectId: 'uuid-1',
    fundingAmount: 45,
    funder: 'cornperson.eth',
    txnHash:
      '0xe6f2e12c4975b2726726b15cb306d22c730d0a1347f1ab4160a077b06b7ed6f7',
  },
  {
    id: 'uuid-40',
    path: 'flower.jpg',
    associatedProject: 'Novel Methods of Tuning Neuroplasticity',
    associatedProjectId: 'uuid-1',
    fundingAmount: 45,
    funder: 'cornperson.eth',
    txnHash:
      '0xe6f2e12c4975b2726726b15cb306d22c730d0a1347f1ab4160a077b06b7ed6f7',
  },
  {
    id: 'uuid-41',
    path: 'glow.jpg',
    associatedProject: 'Novel Methods of Tuning Neuroplasticity',
    associatedProjectId: 'uuid-1',
    fundingAmount: 45,
    funder: 'cornperson.eth',
    txnHash:
      '0xe6f2e12c4975b2726726b15cb306d22c730d0a1347f1ab4160a077b06b7ed6f7',
  },
  {
    id: 'uuid-42',
    path: 'helix.jpg',
    associatedProject: 'Novel Methods of Tuning Neuroplasticity',
    associatedProjectId: 'uuid-1',
    fundingAmount: 45,
    funder: 'cornperson.eth',
    txnHash:
      '0xe6f2e12c4975b2726726b15cb306d22c730d0a1347f1ab4160a077b06b7ed6f7',
  },
  {
    id: 'uuid-43',
    path: 'ignition.jpg',
    associatedProject: 'Novel Methods of Tuning Neuroplasticity',
    associatedProjectId: 'uuid-1',
    fundingAmount: 45,
    funder: 'cornperson.eth',
    txnHash:
      '0xe6f2e12c4975b2726726b15cb306d22c730d0a1347f1ab4160a077b06b7ed6f7',
  },
  {
    id: 'uuid-44',
    path: 'iso.jpg',
    associatedProject: 'Novel Methods of Tuning Neuroplasticity',
    associatedProjectId: 'uuid-1',
    fundingAmount: 45,
    funder: 'cornperson.eth',
    txnHash:
      '0xe6f2e12c4975b2726726b15cb306d22c730d0a1347f1ab4160a077b06b7ed6f7',
  },
  {
    id: 'uuid-45',
    path: 'lasers.jpg',
    associatedProject: 'Novel Methods of Tuning Neuroplasticity',
    associatedProjectId: 'uuid-1',
    fundingAmount: 45,
    funder: 'cornperson.eth',
    txnHash:
      '0xe6f2e12c4975b2726726b15cb306d22c730d0a1347f1ab4160a077b06b7ed6f7',
  },
  {
    id: 'uuid-46',
    path: 'molecule.jpg',
    associatedProject: 'Novel Methods of Tuning Neuroplasticity',
    associatedProjectId: 'uuid-1',
    fundingAmount: 45,
    funder: 'cornperson.eth',
    txnHash:
      '0xe6f2e12c4975b2726726b15cb306d22c730d0a1347f1ab4160a077b06b7ed6f7',
  },
  {
    id: 'uuid-47',
    path: 'network.jpg',
    associatedProject: 'Novel Methods of Tuning Neuroplasticity',
    associatedProjectId: 'uuid-1',
    fundingAmount: 45,
    funder: 'cornperson.eth',
    txnHash:
      '0xe6f2e12c4975b2726726b15cb306d22c730d0a1347f1ab4160a077b06b7ed6f7',
  },
  {
    id: 'uuid-48',
    path: 'node.jpg',
    associatedProject: 'Novel Methods of Tuning Neuroplasticity',
    associatedProjectId: 'uuid-1',
    fundingAmount: 45,
    funder: 'cornperson.eth',
    txnHash:
      '0xe6f2e12c4975b2726726b15cb306d22c730d0a1347f1ab4160a077b06b7ed6f7',
  },
  {
    id: 'uuid-49',
    path: 'nucleus.jpg',
    associatedProject: 'Novel Methods of Tuning Neuroplasticity',
    associatedProjectId: 'uuid-1',
    fundingAmount: 45,
    funder: 'cornperson.eth',
    txnHash:
      '0xe6f2e12c4975b2726726b15cb306d22c730d0a1347f1ab4160a077b06b7ed6f7',
  },
  {
    id: 'uuid-50',
    path: 'planets.jpg',
    associatedProject: 'Novel Methods of Tuning Neuroplasticity',
    associatedProjectId: 'uuid-1',
    fundingAmount: 45,
    funder: 'cornperson.eth',
    txnHash:
      '0xe6f2e12c4975b2726726b15cb306d22c730d0a1347f1ab4160a077b06b7ed6f7',
  },
  {
    id: 'uuid-51',
    path: 'portal.jpg',
    associatedProject: 'Novel Methods of Tuning Neuroplasticity',
    associatedProjectId: 'uuid-1',
    fundingAmount: 45,
    funder: 'cornperson.eth',
    txnHash:
      '0xe6f2e12c4975b2726726b15cb306d22c730d0a1347f1ab4160a077b06b7ed6f7',
  },
  {
    id: 'uuid-52',
    path: 'surface.jpg',
    associatedProject: 'Novel Methods of Tuning Neuroplasticity',
    associatedProjectId: 'uuid-1',
    fundingAmount: 45,
    funder: 'cornperson.eth',
    txnHash:
      '0xe6f2e12c4975b2726726b15cb306d22c730d0a1347f1ab4160a077b06b7ed6f7',
  },
  {
    id: 'uuid-53',
    path: 'threads.jpg',
    associatedProject: 'Novel Methods of Tuning Neuroplasticity',
    associatedProjectId: 'uuid-1',
    fundingAmount: 45,
    funder: 'cornperson.eth',
    txnHash:
      '0xe6f2e12c4975b2726726b15cb306d22c730d0a1347f1ab4160a077b06b7ed6f7',
  },
  {
    id: 'uuid-54',
    path: 'tron.jpg',
    associatedProject: 'Novel Methods of Tuning Neuroplasticity',
    associatedProjectId: 'uuid-1',
    fundingAmount: 45,
    funder: 'cornperson.eth',
    txnHash:
      '0xe6f2e12c4975b2726726b15cb306d22c730d0a1347f1ab4160a077b06b7ed6f7',
  },
  {
    id: 'uuid-55',
    path: 'robot.jpg',
    associatedProject: 'Novel Methods of Tuning Neuroplasticity',
    associatedProjectId: 'uuid-1',
    fundingAmount: 45,
    funder: 'cornperson.eth',
    txnHash:
      '0xe6f2e12c4975b2726726b15cb306d22c730d0a1347f1ab4160a077b06b7ed6f7',
  },
  {
    id: 'uuid-56',
    path: 'robot.jpg',
    associatedProject: 'Novel Methods of Tuning Neuroplasticity',
    associatedProjectId: 'uuid-1',
    fundingAmount: 45,
    funder: 'cornperson.eth',
    txnHash:
      '0xe6f2e12c4975b2726726b15cb306d22c730d0a1347f1ab4160a077b06b7ed6f7',
  },
  {
    id: 'uuid-57',
    path: 'robot.jpg',
    associatedProject: 'Novel Methods of Tuning Neuroplasticity',
    associatedProjectId: 'uuid-1',
    fundingAmount: 45,
    funder: 'cornperson.eth',
    txnHash:
      '0xe6f2e12c4975b2726726b15cb306d22c730d0a1347f1ab4160a077b06b7ed6f7',
  },
  {
    id: 'uuid-58',
    path: 'robot.jpg',
    associatedProject: 'Novel Methods of Tuning Neuroplasticity',
    associatedProjectId: 'uuid-1',
    fundingAmount: 45,
    funder: 'cornperson.eth',
    txnHash:
      '0xe6f2e12c4975b2726726b15cb306d22c730d0a1347f1ab4160a077b06b7ed6f7',
  },
  {
    id: 'uuid-59',
    path: 'robot.jpg',
    associatedProject: 'Novel Methods of Tuning Neuroplasticity',
    associatedProjectId: 'uuid-1',
    fundingAmount: 45,
    funder: 'cornperson.eth',
    txnHash:
      '0xe6f2e12c4975b2726726b15cb306d22c730d0a1347f1ab4160a077b06b7ed6f7',
  },
  {
    id: 'uuid-60',
    path: 'robot.jpg',
    associatedProject: 'Novel Methods of Tuning Neuroplasticity',
    associatedProjectId: 'uuid-1',
    fundingAmount: 45,
    funder: 'cornperson.eth',
    txnHash:
      '0xe6f2e12c4975b2726726b15cb306d22c730d0a1347f1ab4160a077b06b7ed6f7',
  },
  {
    id: 'uuid-61',
    path: 'robot.jpg',
    associatedProject: 'Novel Methods of Tuning Neuroplasticity',
    associatedProjectId: 'uuid-1',
    fundingAmount: 45,
    funder: 'cornperson.eth',
    txnHash:
      '0xe6f2e12c4975b2726726b15cb306d22c730d0a1347f1ab4160a077b06b7ed6f7',
  },
  {
    id: 'uuid-62',
    path: 'robot.jpg',
    associatedProject: 'Novel Methods of Tuning Neuroplasticity',
    associatedProjectId: 'uuid-1',
    fundingAmount: 45,
    funder: 'cornperson.eth',
    txnHash:
      '0xe6f2e12c4975b2726726b15cb306d22c730d0a1347f1ab4160a077b06b7ed6f7',
  },
  {
    id: 'uuid-63',
    path: 'robot.jpg',
    associatedProject: 'Novel Methods of Tuning Neuroplasticity',
    associatedProjectId: 'uuid-1',
    fundingAmount: 45,
    funder: 'cornperson.eth',
    txnHash:
      '0xe6f2e12c4975b2726726b15cb306d22c730d0a1347f1ab4160a077b06b7ed6f7',
  },
  {
    id: 'uuid-64',
    path: 'robot.jpg',
    associatedProject: 'Novel Methods of Tuning Neuroplasticity',
    associatedProjectId: 'uuid-1',
    fundingAmount: 45,
    funder: 'cornperson.eth',
    txnHash:
      '0xe6f2e12c4975b2726726b15cb306d22c730d0a1347f1ab4160a077b06b7ed6f7',
  },
  {
    id: 'uuid-65',
    path: 'robot.jpg',
    associatedProject: 'Novel Methods of Tuning Neuroplasticity',
    associatedProjectId: 'uuid-1',
    fundingAmount: 45,
    funder: 'cornperson.eth',
    txnHash:
      '0xe6f2e12c4975b2726726b15cb306d22c730d0a1347f1ab4160a077b06b7ed6f7',
  },
  {
    id: 'uuid-66',
    path: 'tower.jpg',
    associatedProject: 'Novel Methods of Tuning Neuroplasticity',
    associatedProjectId: 'uuid-1',
    fundingAmount: 45,
    funder: 'cornperson.eth',
    txnHash:
      '0xe6f2e12c4975b2726726b15cb306d22c730d0a1347f1ab4160a077b06b7ed6f7',
  },
  {
    id: 'uuid-67',
    path: 'tower.jpg',
    associatedProject: 'Novel Methods of Tuning Neuroplasticity',
    associatedProjectId: 'uuid-1',
    fundingAmount: 45,
    funder: 'cornperson.eth',
    txnHash:
      '0xe6f2e12c4975b2726726b15cb306d22c730d0a1347f1ab4160a077b06b7ed6f7',
  },
  {
    id: 'uuid-68',
    path: 'tower.jpg',
    associatedProject: 'Novel Methods of Tuning Neuroplasticity',
    associatedProjectId: 'uuid-1',
    fundingAmount: 45,
    funder: 'cornperson.eth',
    txnHash:
      '0xe6f2e12c4975b2726726b15cb306d22c730d0a1347f1ab4160a077b06b7ed6f7',
  },
  {
    id: 'uuid-69',
    path: 'tower.jpg',
    associatedProject: 'Novel Methods of Tuning Neuroplasticity',
    associatedProjectId: 'uuid-1',
    fundingAmount: 45,
    funder: 'cornperson.eth',
    txnHash:
      '0xe6f2e12c4975b2726726b15cb306d22c730d0a1347f1ab4160a077b06b7ed6f7',
  },
  {
    id: 'uuid-70',
    path: 'tower.jpg',
    associatedProject: 'Novel Methods of Tuning Neuroplasticity',
    associatedProjectId: 'uuid-1',
    fundingAmount: 45,
    funder: 'cornperson.eth',
    txnHash:
      '0xe6f2e12c4975b2726726b15cb306d22c730d0a1347f1ab4160a077b06b7ed6f7',
  },
  {
    id: 'uuid-71',
    path: 'tower.jpg',
    associatedProject: 'Novel Methods of Tuning Neuroplasticity',
    associatedProjectId: 'uuid-1',
    fundingAmount: 45,
    funder: 'cornperson.eth',
    txnHash:
      '0xe6f2e12c4975b2726726b15cb306d22c730d0a1347f1ab4160a077b06b7ed6f7',
  },
  {
    id: 'uuid-72',
    path: 'tower.jpg',
    associatedProject: 'Novel Methods of Tuning Neuroplasticity',
    associatedProjectId: 'uuid-1',
    fundingAmount: 45,
    funder: 'cornperson.eth',
    txnHash:
      '0xe6f2e12c4975b2726726b15cb306d22c730d0a1347f1ab4160a077b06b7ed6f7',
  },
  {
    id: 'uuid-73',
    path: 'tower.jpg',
    associatedProject: 'Novel Methods of Tuning Neuroplasticity',
    associatedProjectId: 'uuid-1',
    fundingAmount: 45,
    funder: 'cornperson.eth',
    txnHash:
      '0xe6f2e12c4975b2726726b15cb306d22c730d0a1347f1ab4160a077b06b7ed6f7',
  },
  {
    id: 'uuid-74',
    path: 'tower.jpg',
    associatedProject: 'Novel Methods of Tuning Neuroplasticity',
    associatedProjectId: 'uuid-1',
    fundingAmount: 45,
    funder: 'cornperson.eth',
    txnHash:
      '0xe6f2e12c4975b2726726b15cb306d22c730d0a1347f1ab4160a077b06b7ed6f7',
  },
  {
    id: 'uuid-75',
    path: 'tower.jpg',
    associatedProject: 'Novel Methods of Tuning Neuroplasticity',
    associatedProjectId: 'uuid-1',
    fundingAmount: 45,
    funder: 'cornperson.eth',
    txnHash:
      '0xe6f2e12c4975b2726726b15cb306d22c730d0a1347f1ab4160a077b06b7ed6f7',
  },
  {
    id: 'uuid-76',
    path: 'tower.jpg',
    associatedProject: 'Novel Methods of Tuning Neuroplasticity',
    associatedProjectId: 'uuid-1',
    fundingAmount: 45,
    funder: 'cornperson.eth',
    txnHash:
      '0xe6f2e12c4975b2726726b15cb306d22c730d0a1347f1ab4160a077b06b7ed6f7',
  },
  {
    id: 'uuid-77',
    path: 'tower.jpg',
    associatedProject: 'Novel Methods of Tuning Neuroplasticity',
    associatedProjectId: 'uuid-1',
    fundingAmount: 45,
    funder: 'cornperson.eth',
    txnHash:
      '0xe6f2e12c4975b2726726b15cb306d22c730d0a1347f1ab4160a077b06b7ed6f7',
  },
];

export default DUMMY_ARTWORK;
