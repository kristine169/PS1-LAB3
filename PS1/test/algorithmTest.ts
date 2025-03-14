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
 * TODO: Describe your testing strategy for toBucketSets() here.
 */
describe("toBucketSets()", () => {
  it("Example test case - replace with your own tests", () => {
    assert.fail(
      "Replace this test case with your own tests based on your testing strategy"
    );
  });
});

/*
 * Testing strategy for getBucketRange():
 *
 * TODO: Describe your testing strategy for getBucketRange() here.
 */
describe("getBucketRange()", () => {
  it("should return undefined for all empty buckets", () => {
    const buckets: Array<Set<Flashcard>> = [new Set(), new Set(), new Set()];
    const result = getBucketRange(buckets);
    assert.strictEqual(result, undefined);
  });

  it("should return the correct range for non-empty buckets", () => {
    const buckets: Array<Set<Flashcard>> = [
      new Set(),
      new Set([new Flashcard("Front 1", "Back 1", "Hint 1", ["tag1"])]),
      new Set([new Flashcard("Front 2", "Back 2", "Hint 2", ["tag2"])])
    ];

    const result = getBucketRange(buckets);
    assert.deepStrictEqual(result, { minBucket: 1, maxBucket: 2 });
  });
  it("should return the correct range when only one bucket has cards", () => {
    const buckets: Array<Set<Flashcard>> = [
      new Set(),
      new Set([new Flashcard("Front 1", "Back 1", "Hint 1", ["tag1"])]),
      new Set()
    ];

    const result = getBucketRange(buckets);
    assert.deepStrictEqual(result, { minBucket: 1, maxBucket: 1 });
  });

  it("should return the correct range when all buckets are filled", () => {
    const buckets: Array<Set<Flashcard>> = [
      new Set([new Flashcard("Front 1", "Back 1", "Hint 1", ["tag1"])]),
      new Set([new Flashcard("Front 2", "Back 2", "Hint 2", ["tag2"])]),
      new Set([new Flashcard("Front 3", "Back 3", "Hint 3", ["tag3"])])
    ];

    const result = getBucketRange(buckets);
    assert.deepStrictEqual(result, { minBucket: 0, maxBucket: 2 });
  });
});

/*
 * Testing strategy for practice():
 *
 * TODO: Describe your testing strategy for practice() here.
 */
describe("practice()", () => {
  it("Example test case - replace with your own tests", () => {
    assert.fail(
      "Replace this test case with your own tests based on your testing strategy"
    );
  });
});

/*
 * Testing strategy for update():
 *
 * TODO: Describe your testing strategy for update() here.
 */
describe("update()", () => {
  it("Example test case - replace with your own tests", () => {
    assert.fail(
      "Replace this test case with your own tests based on your testing strategy"
    );
  });
});

/*
 * Testing strategy for getHint():
 *
 * TODO: Describe your testing strategy for getHint() here.
 */
describe("getHint()", () => {
  it("Example test case - replace with your own tests", () => {
    assert.fail(
      "Replace this test case with your own tests based on your testing strategy"
    );
  });
});

/*
 * Testing strategy for computeProgress():
 *
 * TODO: Describe your testing strategy for computeProgress() here.
 */
describe("computeProgress()", () => {
  it("Example test case - replace with your own tests", () => {
    assert.fail(
      "Replace this test case with your own tests based on your testing strategy"
    );
  });
});
