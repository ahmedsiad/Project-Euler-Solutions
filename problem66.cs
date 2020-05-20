using System;
using System.Collections.Generic;
using System.Dynamic;
using System.Numerics;

namespace Problem_68_Solution
{
    class Program
    {

        static void Main(string[] args)
        {
            TimeSpan t = DateTime.UtcNow - new DateTime(1970, 1, 1);
            int secondsSinceEpoch = (int)t.TotalSeconds;

            BigInteger highest = 0;

            for (int i = 2; i <= 1000; i++)
            {
                if (Math.Floor(Math.Sqrt(i)) == Math.Sqrt(i)) continue;

                BigInteger solution = FindMinimalSolution(i);
                if (solution > highest)
                {
                    highest = solution;
                    Console.WriteLine(i + ", " + solution);
                }
            }

            Console.WriteLine((DateTime.UtcNow - new DateTime(1970, 1, 1)).TotalSeconds - secondsSinceEpoch + "s");
        }

        static BigInteger FindMinimalSolution(double D)
        {
            List<double> period = FindPeriod(D);
            int count = 0;

            BigInteger dI = (BigInteger)D;

            while (true)
            {
                BigInteger[] expansion = GetExpansion(count, period);
                if (expansion[0] * expansion[0] - dI * expansion[1] * expansion[1] == 1) return expansion[0];
                count++;
            }
        }

        static List<double> FindPeriod(double root)
        {
      
            List<double> period = new List<double>();
            List<Fraction> fractions = new List<Fraction>();
            double a0 = (double)Math.Floor(Math.Sqrt(root));

            period.Add(a0);

            Fraction current = new Fraction(1, a0);

            while (true)
            {
                double d = (double)Math.Floor(current.n / (Math.Sqrt(root) - current.d));
                double c = (double)(root - current.d * current.d) / current.n;
                current = new Fraction(c, c * d - current.d);

                if (fractions.FindIndex(f => f.n == current.n && f.d == current.d) != -1) return period;
                period.Add(d);
                fractions.Add(current);
            }
        }

        static BigInteger[] GetExpansion(double iterations, List<double> period)
        {
            BigInteger numerator = 1;
            BigInteger denominator = (BigInteger)period[(int)iterations % (period.Count - 1) + 1];

            for (int i = (int)iterations; i > 0; i--)
            {
                double index = (i - 1) % (period.Count - 1);
                BigInteger[] res = AddFraction(period[(int)index + 1], numerator, denominator);
                numerator = res[1];
                denominator = res[0];
            }

            BigInteger[] final = AddFraction(period[0], numerator, denominator);
            return final;
        }

        static BigInteger[] AddFraction(double c, BigInteger numerator, BigInteger denominator)
        {
            BigInteger cI = (BigInteger)c;
            BigInteger newNumerator = denominator * cI + numerator;
            BigInteger[] final = new BigInteger[2];
            final[0] = newNumerator;
            final[1] = denominator;
            return final;
        }
    }

    class Fraction
    {
        public double n;
        public double d;

        public Fraction(double N, double D)
        {
            n = N;
            d = D;
        }
    }
}
