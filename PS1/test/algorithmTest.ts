import assert from "assert";
import { AnswerDifficulty, Flashcard, BucketMap } from "../src/flashcards";
import {
  toBucketSets,
  getBucketRange,
  practice,
  update,
  getHint,
  computeProgress,
} from "../src/algorithm";

/*
 * Testing strategy for toBucketSets():
 *
 * 1. Test with an empty map.
 * 2. Test with contiguous bucket indices.
 * 3. Test with non-contiguous bucket indices (should fill missing buckets with empty sets).
 * 4. Test with empty sets as bucket values.
 * 5. Test with a single bucket.
 * 6. Test with high index values.
 */
describe("toBucketSets()", () => {

  it("should return an empty array when given an empty map", () => {
    const buckets: BucketMap = new Map();
    const result = toBucketSets(buckets);
    assert.deepEqual(result, []);
  });

  it("should correctly handle contiguous bucket indices", () => {
    const buckets: BucketMap = new Map([
      [0, new Set([new Flashcard("Q1", "A1", "", [])])],
      [1, new Set([new Flashcard("Q2", "A2", "", [])])],
      [2, new Set([new Flashcard("Q3", "A3", "", [])])]
    ]);
    const result = toBucketSets(buckets);
    assert.equal(result.length, 3);
    assert.deepEqual(result[0], buckets.get(0));
    assert.deepEqual(result[1], buckets.get(1));
    assert.deepEqual(result[2], buckets.get(2));
  });

  it("should correctly handle non-contiguous bucket indices with empty sets for missing indices", () => {
    const buckets: BucketMap = new Map([
      [0, new Set([new Flashcard("Q1", "A1", "", [])])],
      [2, new Set([new Flashcard("Q2", "A2", "", [])])]
    ]);
    const result = toBucketSets(buckets);
    assert.equal(result.length, 3);
    assert.deepEqual(result[0], buckets.get(0));
    assert.deepEqual(result[1], new Set());
    assert.deepEqual(result[2], buckets.get(2));
  });

  it("should handle buckets with explicitly empty sets", () => {
    const buckets: BucketMap = new Map([
      [0, new Set()],
      [1, new Set([new Flashcard("Q1", "A1", "", [])])]
    ]);
    const result = toBucketSets(buckets);
    assert.equal(result.length, 2);
    assert.deepEqual(result[0], new Set());
    assert.deepEqual(result[1], buckets.get(1));
  });

  it("should correctly handle a single bucket", () => {
    const buckets: BucketMap = new Map([
      [0, new Set([new Flashcard("Q1", "A1", "", [])])]
    ]);
    const result = toBucketSets(buckets);
    assert.equal(result.length, 1);
    assert.deepEqual(result[0], buckets.get(0));
  });

  it("should handle high index values and fill missing buckets with empty sets", () => {
    const buckets: BucketMap = new Map([
      [0, new Set([new Flashcard("Q1", "A1", "", [])])],
      [5, new Set([new Flashcard("Q2", "A2", "", [])])]
    ]);
    const result = toBucketSets(buckets);
    assert.equal(result.length, 6);
    assert.deepEqual(result[0], buckets.get(0));
    assert.deepEqual(result[1], new Set());
    assert.deepEqual(result[5], buckets.get(5));
  });

});
/*
 * Testing strategy for getBucketRange():
 *
 * TODO: Describe your testing strategy for getBucketRange() here.
 */
describe("getBucketRange()", () => {
  // Commented out the test as the function is not implemented yet
  // it("Example test case - replace with your own tests", () => {
  //   assert.fail(
  //     "Replace this test case with your own tests based on your testing strategy"
  //   );
  // });
});


/*
 * Testing strategy for practice():
 *
 * TODO: Describe your testing strategy for practice() here.
 */
describe("practice()", () => {
  // Commented out the test as the function is not implemented yet
  // it("Example test case - replace with your own tests", () => {
  //   assert.fail(
  //     "Replace this test case with your own tests based on your testing strategy"
  //   );
  // });
});


/*
 * Testing strategy for update():
 *
 * TODO: Describe your testing strategy for update() here.
 */
describe("update()", () => {
  // Commented out the test as the function is not implemented yet
  // it("Example test case - replace with your own tests", () => {
  //   assert.fail(
  //     "Replace this test case with your own tests based on your testing strategy"
  //   );
  // });
});


/*
 * Testing strategy for getHint():
 *
 * TODO: Describe your testing strategy for getHint() here.
 */
describe("getHint()", () => {
  // Commented out the test as the function is not implemented yet
  // it("Example test case - replace with your own tests", () => {
  //   assert.fail(
  //     "Replace this test case with your own tests based on your testing strategy"
  //   );
  // });
});


/*
 * Testing strategy for computeProgress():
 *
 * TODO: Describe your testing strategy for computeProgress() here.
 */
describe("computeProgress()", () => {
  // Commented out the test as the function is not implemented yet
  // it("Example test case - replace with your own tests", () => {
  //   assert.fail(
  //     "Replace this test case with your own tests based on your testing strategy"
  //   );
  // });
});