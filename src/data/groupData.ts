// Create dummy geometry objects for testing
const dummyGeo1 = { id: 'geo1' } as GeometryObject
const dummyGeo2 = { id: 'geo2' } as GeometryObject
const dummyGeo3 = { id: 'geo3' } as GeometryObject
const dummyGeo4 = { id: 'geo4' } as GeometryObject
const dummyGeo5 = { id: 'geo5' } as GeometryObject
const dummyGeo6 = { id: 'geo6' } as GeometryObject
const dummyGeo7 = { id: 'geo7' } as GeometryObject
const dummyGeo8 = { id: 'geo8' } as GeometryObject
const dummyGeo9 = { id: 'geo9' } as GeometryObject
const dummyGeo10 = { id: 'geo10' } as GeometryObject

export const nestedGroups: NestedGroup[] = [
    {
        id: 'root1',
        name: 'Building A',
        objects: [dummyGeo1, dummyGeo2],
        color: '#00ff00',
        children: [
            {
                id: 'child1',
                name: 'Floor 1',
                objects: [dummyGeo3],
                children: [
                    {
                        id: 'grandchild1',
                        name: 'Room 101',
                        objects: [dummyGeo4],
                        children: [],
                        color: '#ff0000'
                    },
                    {
                        id: 'grandchild2',
                        name: 'Room 102',
                        objects: [dummyGeo5],
                        children: []
                    }
                ]
            },
            {
                id: 'child2',
                name: 'Floor 2',
                objects: [dummyGeo6],
                children: [
                    {
                        id: 'grandchild3',
                        name: 'Room 201',
                        objects: [dummyGeo7],
                        children: []
                    }
                ]
            }
        ]
    },
    {
        id: 'root2',
        name: 'Building B',
        objects: [dummyGeo8],
        children: [
            {
                id: 'child3',
                name: 'Ground Floor',
                objects: [dummyGeo9],
                children: [
                    {
                        id: 'grandchild4',
                        name: 'Lobby',
                        objects: [dummyGeo10],
                        children: [],
                        color: '#0000ff'
                    }
                ]
            }
        ]
    }
]

export default nestedGroups

/**
 * Represents a basic geometry object.
 */
export interface GeometryObject {
  id: string;
  name?: string;
  // Additional properties can be added here as needed.
}

/**
* Filters done in correct sequencing with arguments to be used for each step.
*/
export interface FilterList {
  name: string;
  id: string;
  callStack: Filter[];
}

/**
* Interface for a filter.
* - name: The name of the filter added to the registry.
* - field: GeometryObject property on which to run the filter.
* - value: Optional value for comparison in the filter.
* - remove: Optional boolean to remove all false results.
*/
export interface Filter {
  name: string;
  field: string;
  value?: string;
  remove?: boolean;
}

/**
* Grouped geometryObjects with path and color information.
*/
export interface Group {
  id: string;
  name: string;
  // Path describes how the group is shown in the tree view.
  // Always include the root first, then any intermediate values, and finally the group name.
  // e.g. ["Wall", "Inner Wall", "Type 1"]
  path: string[];
  elements: GeometryObject[];
  color?: string;
}

/**
* Filter registry to store all filter functions.
*/
export class FilterRegistry {
  public filters: { [filterName: string]: Function } = {};

  public filterCallStack: FilterList = {
      name: '',
      id: '',
      callStack: []
  };

  /**
   * Add a function to the registry.
   * @param name Name of the filter.
   * @param filter Filter function, expected to receive (inGroup: Group[], field: string, value?: string, remove?: boolean)
   *               and return a Group[].
   */
  addFilter(
      name: string,
      filter: (inGroup: Group[], field: string, value?: string, remove?: boolean) => Group[]
  ) {
      this.filters[name] = filter;
  }

  /**
   * Call a filter defined in the registry.
   * @param name Name of the filter.
   * @param inGroup Group to filter (must have at least one root level).
   * @param field Field to filter upon.
   * @param value Value to use for filtering.
   * @param remove If true, remove all false results.
   * @returns Groups filtered by the provided filter.
   */
  callFilter(
      name: string,
      inGroup: Group[],
      field: string,
      value?: string,
      remove?: boolean
  ) {
      const filter = this.filters[name];
      if (typeof filter === 'function') {
          return filter(inGroup, field, value, remove);
      } else {
          throw new Error(`Function '${name}' not found.`);
      }
  }

  /**
   * Get all filter names available in the registry.
   * @returns A list of filter names.
   */
  getFilterNames(): string[] {
      return Object.keys(this.filters);
  }

}

/**
* Interface for a nested group tree created for grouped geometry objects.
*/
export interface NestedGroup {
  name: string;
  objects: GeometryObject[];
  id: string;
  children: NestedGroup[];
  color?: string;
}