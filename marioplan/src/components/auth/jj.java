import java.io.*;
import java.util.*;

public class Solution {

    public static void main(String[] args) {
        /* Enter your code here. Read input from STDIN. Print output to STDOUT. Your class should be named Solution. */
        
        
        long[] a=new long[6];
        Scanner sc=new Scanner(System.in);
       
        for(int j=0;j<6;j++)
            a[j]=sc.nextInt();
        
    
    
        long sum =0;
        for(int i = 1 ; i <= 6 ; i= i+2)
        {
            sum = sum + a[i];
        }
        System.out.println(sum);
    }
}