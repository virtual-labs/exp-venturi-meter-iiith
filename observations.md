### What is Measured?

During the experiment, the following quantities are measured:

- Differential manometer reading,
- Volume of water collected,
- Time required for collection,
- Diameter of the inlet section,
- Diameter of the throat section.

These measurements are used to determine the theoretical discharge, actual discharge, and coefficient of discharge of the Venturi meter.

### Why are these Measurements Important?

#### Differential Head

The manometer reading gives the pressure difference between the inlet and the throat of the Venturi meter. This pressure difference provides the driving force for calculating the theoretical discharge.

#### Collected Volume and Time

The volume of water collected over a known time interval gives the actual discharge through the meter.

#### Inlet and Throat Diameters

The diameters determine the flow areas at the inlet and throat sections. These areas are required in the discharge equation derived from Bernoulli's theorem and the continuity equation.

#### Coefficient of Discharge

Comparing the actual discharge with the theoretical discharge accounts for practical losses due to friction and turbulence and indicates the accuracy of the Venturi meter.

### Sequential Calculations

#### Step 1

Calculate the inlet and throat areas.

$$
A=\frac{\pi d^2}{4}
$$

#### Step 2

Determine the differential head from the manometer reading.

$$
h
$$

#### Step 3

Calculate the theoretical discharge.

$$
Q_t=
\frac{A_1A_2}
{\sqrt{A_1^2-A_2^2}}
\sqrt{2gh}
$$

#### Step 4

Calculate the actual discharge.

$$
Q_a=\frac{V}{t}
$$

#### Step 5

Calculate the coefficient of discharge.

$$
C_d=\frac{Q_a}{Q_t}
$$

### Solved Numerical Example

Given,

Inlet diameter,

$$
d_1=0.05\ m
$$

Throat diameter,

$$
d_2=0.03\ m
$$

Differential head,

$$
h=0.25\ m
$$

Collected volume,

$$
V=0.03\ m^3
$$

Collection time,

$$
t=20\ s
$$

Actual discharge,

$$
Q_a=\frac{0.03}{20}=0.0015\ m^3/s
$$

Theoretical discharge,

$$
Q_t=0.00158\ m^3/s
$$

Coefficient of discharge,

$$
C_d=\frac{0.0015}{0.00158}=0.95
$$

### Observation Table

| Trial | Differential Head (m) | Actual Discharge ($m^3/s$) | Theoretical Discharge ($m^3/s$) | Coefficient of Discharge |
| ----- | --------------------: | -------------------------: | ------------------------------: | -----------------------: |
| 1     |                  0.15 |                    0.00115 |                         0.00122 |                     0.94 |
| 2     |                  0.20 |                    0.00134 |                         0.00140 |                     0.96 |
| 3     |                  0.25 |                    0.00150 |                         0.00158 |                     0.95 |
| 4     |                  0.30 |                    0.00166 |                         0.00173 |                     0.96 |
| 5     |                  0.35 |                    0.00180 |                         0.00189 |                     0.95 |

### Interpretation

The observations show that an increase in the differential head across the Venturi meter increases the flow rate through the pipeline.

The actual discharge is slightly smaller than the theoretical discharge because of frictional and minor energy losses within the meter. The coefficient of discharge remains close to unity, indicating that the Venturi meter provides accurate flow measurement with relatively small head loss.

The experiment verifies the practical application of Bernoulli's theorem and the continuity equation for determining fluid discharge in closed conduits.
