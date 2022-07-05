declare const math: {
  /**
   * The number of radiians in a degree (0.0174532925).
   */
  DEGTORAD: 0.017453292;

  /**
   * The number of degrees in a radian.
   */
  RADTODEG: 57.295779513;

  unglobalizeObjectId(modelId: string, globalId: string): string;
  globalizeObjectId(modelId: string, objectId: string): string;

  /**
   * Returns a new, uninitialized two-element vector.
   * @returns {Number[]}
   */
  vec2: (values?: number[]) => number[];

  /**
   * Returns a new, uninitialized three-element vector.
   * @returns {Number[]}
   */
  vec3: (values?: number[]) => number[];

  /**
   * Returns a new, uninitialized four-element vector.
   * @returns {Number[]}
   */
  vec4: (values?: number[]) => number[];

  /**
   * Returns a new, uninitialized four-element vector.
   * @returns {Number[]}
   */
  mat3: (values?: number[]) => number[];

  /**
   * Returns a new, uninitialized four-element vector.
   * @returns {Number[]}
   */
  mat4: (values?: number[]) => number[];

  /**
   * Converts a 3x3 matrix to 4x4
   * @method mat3ToMat4
   * @param {Number[]} mat3 3x3 matrix.
   * @param {Number[]} mat4 4x4 matrix
   * @static
   * @returns {Number[]}
   */
  mat3ToMat4: (mat3: number[], mat4?: number[]) => number[];

  /**
   * Negates a four-element vector.
   * @method negateVec3
   * @static
   * @param {Array(Number)} v Vector to negate
   * @param  {Array(Number)} [dest] Destination vector
   * @return {Array(Number)} dest if specified, v otherwise
   */
  negateVec3: (v: number[], dest: number[]) => number[];

  /**
   * Negates a four-element vector.
   * @method negateVec4
   * @static
   * @param {Array(Number)} v Vector to negate
   * @param  {Array(Number)} [dest] Destination vector
   * @return {Array(Number)} dest if specified, v otherwise
   */
  negateVec4: (v: number[], dest: number[]) => number[];

  /**
   * Adds one four-element vector to another.
   * @method addVec4
   * @static
   * @param {Array(Number)} u First vector
   * @param {Array(Number)} v Second vector
   * @param  {Array(Number)} [dest] Destination vector
   * @return {Array(Number)} dest if specified, u otherwise
   */
  addVec4: (u: number[], v: number[], dest: number[]) => number[];

  /**
   * Gets the center of a 2D AABB.
   * @returns {Number[]}
   */
  getAABB2Center(aabb: number[], dest?: (values?: number[]) => number[]): number[];

  /**
   * Gets the center of an AABB.
   * @returns {Number[]}
   */
  getAABB3Center(aabb: number[], dest?: (values?: number[]) => number[]): number[];

  /**
   * Gets the diagonal size of an AABB3 given as minima and maxima.
   */
  getAABB3Diag: (aabb: number[]) => number;

  /**
   * Normalizes a three-element vector
   */
  normalizeVec3: (v: number[], dest?: any) => number[];
};

export { math };
