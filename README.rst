====================
Algorithm Visualiser
====================

|License: GPL v3|

About
-----

*Algorithm Visualiser* was built to allow users to picture algorithms,
such as sorting, graphically.

Made with React, Next.js, and TypeScript (Superset of JavaScript).

This project was inspired by `a project`_ by `Clément Mihailescu`_.

Algorithms
----------

Sorting
~~~~~~~

+----------------+-----------+-----------------------------------------+
| Algorithm      | Space     | Time                                    |
|                |           +-------------+-------------+-------------+
|                |           | Best        | Worst       | Average     |
+----------------+-----------+-------------+-------------+-------------+
| Bubble Sort    | O(1       | O(n)        | O(n^2)      | O(n^2)      |
+----------------+-----------+-------------+-------------+-------------+
| Quicksort      | O(log(n)) | O(n log(n)) | O(n^2)      | O(n log(n)) |
+----------------+-----------+-------------+-------------+-------------+
| Mergesort      | O(n)      | O(n log(n)) | O(n log(n)) | O(n log(n)) |
+----------------+-----------+-------------+-------------+-------------+
| Timsort        | O(n)      | O(n)        | O(n log(n)) | O(n log(n)) |
+----------------+-----------+-------------+-------------+-------------+
| Insertion Sort | O(1)      | O(n)        | O(n^2)      | O(n^2)      |
+----------------+-----------+-------------+-------------+-------------+
| Heapsort       | O(1)      | O(n log(n)) | O(n log(n)) | O(n log(n)) |
+----------------+-----------+-------------+-------------+-------------+
.. | Blank          |           |             |             |             |
.. +----------------+-----------+-------------+-------------+-------------+

License
-------

This repository is licensed under the GNU General Public License v3.0

.. _a project: https://github.com/clementmihailescu/Sorting-Visualizer
.. _Clément Mihailescu: https://github.com/clementmihailescu

.. |License: GPL v3| image:: https://img.shields.io/badge/License-GPLv3-blue.svg
   :target: https://www.gnu.org/licenses/gpl-3.0
