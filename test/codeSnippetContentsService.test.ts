import { CodeSnippetContentsService } from '../src/CodeSnippetContentsService';

const codeSnippetContentsService = CodeSnippetContentsService.getInstance();

test('test getData', () => {
  const res = {
    name: 'sum_array',
    description:
      'Scala program of array. Declare, print, and calculate sum of all elements.',
    language: 'Scala',
    code: [
      'object ExampleArray1 {',
      '    ',
      '   def main(args: Array[String]) {',
      '       ',
      '      var numbers = Array(10,20,30,40,50);',
      '      var N:Int=0;',
      '      ',
      '      //print all array elements',
      '      println("All array elements: ");',
      '      for ( N <- numbers ) {',
      '         println(N);',
      '      }',
      '      //calculating SUM of all elements',
      '      var sum: Int=0;',
      '      for ( N <- numbers ) {',
      '         sum+=N;',
      '      }      ',
      '      println("Sum of all array elements: "+sum);',
      '',
      '   }',
      '}'
    ],
    id: 11,
    tags: ['math']
  };
  const data = codeSnippetContentsService.getData(
    'snippets/sum_array.json',
    'file'
  );

  data.then(val => expect(val).toBe(res));
});
